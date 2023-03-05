import bcrypt from 'bcryptjs'

export async function bcryptHash(string: string) {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(string, salt)
}

export async function bcryptCompare() {
  return bcrypt.compare('hello-world', '$2a$13$Mm3rPCNfLD47xm6tSnWeWuHqoOcaWBCeW.EO1qjoTEVTo4Ln.EMcS')
}
