export type AuthUserType = {
  access: string;
  refresh: string;
  is_client: boolean;
  name: string;
};

type EmplacementType = {
  id_emplacement: number;
  latitude: number;
  longitude: number;
  name_emplacement: string;
};

type OrganisteurType = [
  {
    adress: string;
    contact: string;
    date_joined: string;
    domaine: string;
    email: string;
    id: number;
    is_active: boolean;
    last_login: string;
    name: string;
    organisation: string;
    profession: string;
    profile_url: string;
    sexe: string;
    subscriptions: [];
  }
];

export type EventType = {
  created_at: string;
  date_debut: string;
  date_fin: string;
  description: string;
  emplacement: EmplacementType;
  files: [];
  id_evenement: number;
  images: [];
  name_evenement: string;
  organisateurs: OrganisteurType;
  participants: [];
  type: string;
};

export type FormationType = {
  created_at: string;
  description_formation: string;
  domaine: string;
  id_formation: number;
  is_free: boolean;
  name_formation: string;
  organisateurs: OrganisteurType;
  participants: [];
};
