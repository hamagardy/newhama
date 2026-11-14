# Local analytics

Run `npm install`, then `npm run dashboard` and open <http://127.0.0.1:4199>.
The server only listens on your computer's loopback interface. It is separate
from Vite and is never copied to the public website build.

## View a local export

Use **Open JSON export** to select a Firebase JSON export containing either the
database root or the `analytics` node. The file stays in browser memory and is
not uploaded. Export files can contain personal data; keep them outside this
repository. The view shows up to 20 recent records in each collection.

## Connect to Firebase

Use Google Application Default Credentials (ADC) belonging to an identity with
read access to the `xallakanm` Realtime Database. Prefer a dedicated identity
with the Firebase Realtime Database Viewer role over an administrator.

If Google Cloud CLI is installed and your account has the required access:

```sh
gcloud auth application-default login --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/firebase.database,https://www.googleapis.com/auth/userinfo.email
npm run dashboard
```

Alternatively, set `GOOGLE_APPLICATION_CREDENTIALS` to the absolute path of a
dedicated service account JSON file **outside this repository**. The Google
authentication library loads it on the server; it never reaches the browser.
Do not paste keys into a source file or use a `VITE_` variable for credentials.

Choose **Refresh from Firebase** after setting up credentials. This application
only makes authenticated GET requests and never falls back to public access.
It does not write to Firebase or save records to disk.

## Close the existing database exposure

Removing the public dashboard does not change Firebase's deployed rules. In
the Firebase console, open **xallakanm → Realtime Database → Rules**. Back up the
existing rules, then restrict the `analytics` node using the instructions in
`security/README.md`. Database rules are independent of website deployment.

References: [Firebase REST authentication](https://firebase.google.com/docs/database/rest/auth),
[Google Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc).
