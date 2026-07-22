import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly at startup rather than silently doing nothing on first submit —
  // easier to notice a missing .env than a mysterious failed insert later.
  console.error(
    'VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are missing. Copy .env.example to .env and fill in your real project values.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Package = 'explorer' | 'challenger' | 'challenger_plus';

export interface TeamMemberInput {
  name: string;
  email: string;
  phone?: string;
  school?: string;
}

export interface CreateTeamResult {
  ok: boolean;
  message: string;
}

export async function createTeamRegistration(
  teamName: string,
  pkg: Package,
  representativeJo1nId: string,
  representativeEmail: string,
  members: TeamMemberInput[]
): Promise<CreateTeamResult> {
  const { data: team, error: teamError } = await supabase
    .from('teams')
    .insert({
      team_name: teamName,
      package: pkg,
      representative_jo1n_id: representativeJo1nId,
      representative_email: representativeEmail,
    })
    .select('id')
    .single();

  if (teamError || !team) {
    return { ok: false, message: teamError?.message || 'Could not save your team. Please try again.' };
  }

  if (members.length > 0) {
    const rows = members.map((m) => ({
      team_id: team.id,
      name: m.name,
      email: m.email,
      phone: m.phone || null,
      school: m.school || null,
    }));
    const { error: membersError } = await supabase.from('team_members').insert(rows);
    if (membersError) {
      return { ok: false, message: `Team was saved, but adding members failed: ${membersError.message}` };
    }
  }

  return { ok: true, message: 'Team registered.' };
}

export async function submitPartnerRequest(
  type: 'university' | 'business',
  organisationName: string,
  contactPerson: string,
  email: string,
  message: string
): Promise<CreateTeamResult> {
  const { error } = await supabase.from('partner_requests').insert({
    type,
    organisation_name: organisationName,
    contact_person: contactPerson,
    email,
    message,
  });

  if (error) {
    return { ok: false, message: error.message };
  }
  return { ok: true, message: 'Thanks — noted. Someone from the HATCH team will follow up with you.' };
}
