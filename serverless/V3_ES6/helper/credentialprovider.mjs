

export async function credentialprovider(ssoprofile, local, profile) {
  let credentials = null;
  if (local == 'yes') {
    if (ssoprofile == 'yes') {
      credentials = await import('@aws-sdk/credential-provider-sso');
      credentials = credentials.fromSSO({ profile });
    }
    else {
      credentials = await import('@aws-sdk/credential-provider-ini');
      credentials = credentials.fromIni({ profile });
    }
  }
  return credentials;
}
