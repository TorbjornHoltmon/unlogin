import { z } from 'zod'

const authorizationParams = [
  'acr_values',
  // 'claims', // added conditionally depending on feature flag
  'claims_locales',
  'client_id',
  'code_challenge',
  'code_challenge_method',
  'display',
  'id_token_hint',
  'login_hint',
  'max_age',
  'nonce',
  'prompt',
  'redirect_uri',
  'registration',
  'request',
  'request_uri',
  'response_mode',
  'response_type',
  'scope',
  'state',
  'ui_locales',
  // 'web_message_uri', // added conditionally depending on feature flag
  // 'web_message_target', // added conditionally depending on feature flag
]

// TODO: ACR?
const acr = z.object({
  acr_values: z.string().optional(),
  acr_values_supported: z.string().optional(),
})

const AuthParams = z.object({
  client_id: z.string(),
  code_challenge: z.string(),
  code_challenge_method: z.string(),
  // Also validate validity
  redirect_uri: z.string(),
})

type AuthParams = z.infer<typeof AuthParams>
