export type rolesEnum = 'admin'|'donor'|'fundraiser';

export const roles: {
  admin: rolesEnum,
  donor: rolesEnum,
  fundraiser: rolesEnum,
} = {
  admin: "admin",
  donor: "donor",
  fundraiser: "fundraiser",
}

export type statusEnum = 'verified'|'pending'|'unverified';

export const status: {
  verified: statusEnum,
  pending: statusEnum,
  unverified: statusEnum,
} = {
  verified: "verified",
  pending: "pending",
  unverified: "unverified",
}
