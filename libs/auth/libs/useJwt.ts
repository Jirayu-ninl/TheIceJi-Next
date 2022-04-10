import JwtService from './jwtService'

export default function useJwt(jwtOverrideConfig) {
  const jwt = new JwtService(jwtOverrideConfig)

  return {
    jwt,
  }
}
