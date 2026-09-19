"use client";
import { Typography, Link } from "@mui/material";
import React from "react";

const Privacy: React.FC = () => (
  <div className="is-text" data-testid="Privacy">
    <Typography variant="h4" component="h1">
      Privacy Policy
    </Typography>
    <Typography paragraph color="textSecondary">
      {`Last updated: 19 September 2026`}
    </Typography>
    <Typography paragraph>
      {`This policy covers anderslundback-harness (“the app”), a personal AI assistant that lets its owner use Gmail, Google Calendar and Google Drive by talking to Claude. The app is operated by Anders Lundbäck for his own use. It is not offered to the public. Contact: `}
      <Link href="mailto:lundback.anders@gmail.com">
        lundback.anders@gmail.com
      </Link>
      {`.`}
    </Typography>

    <Typography variant="h5" component="h2">
      Google data the app accesses
    </Typography>
    <Typography paragraph>
      {`• Gmail: read, compose, send, labels and modify.`}
    </Typography>
    <Typography paragraph>
      {`• Google Calendar: read and edit.`}
    </Typography>
    <Typography paragraph>
      {`• Google Drive, Docs, Sheets and Contacts: read-only.`}
    </Typography>

    <Typography variant="h5" component="h2">
      How the data is used
    </Typography>
    <Typography paragraph>
      {`Data is used only to carry out requests the owner makes, such as searching mail, drafting and sending messages, and managing calendar events. There is no advertising. Data is never sold and never shared with third parties.`}
    </Typography>

    <Typography variant="h5" component="h2">
      Processing by Anthropic’s Claude
    </Typography>
    <Typography paragraph>
      {`When the owner asks the assistant to work with their content, the relevant content is sent to Anthropic’s Claude to process the request. This happens under the owner’s own Anthropic account.`}
    </Typography>

    <Typography variant="h5" component="h2">
      Storage and access
    </Typography>
    <Typography paragraph>
      {`OAuth tokens are stored only on the owner’s own computer. No human reads the data.`}
    </Typography>

    <Typography variant="h5" component="h2">
      Google API Services User Data Policy
    </Typography>
    <Typography paragraph>
      {`The app’s use and transfer of information received from Google APIs adheres to the `}
      <Link
        href="https://developers.google.com/terms/api-services-user-data-policy"
        target="_blank"
        rel="noopener"
      >
        Google API Services User Data Policy
      </Link>
      {`, including the Limited Use requirements.`}
    </Typography>

    <Typography variant="h5" component="h2">
      Revoking access
    </Typography>
    <Typography paragraph>
      {`Access can be revoked at any time at `}
      <Link
        href="https://myaccount.google.com/permissions"
        target="_blank"
        rel="noopener"
      >
        https://myaccount.google.com/permissions
      </Link>
      {`.`}
    </Typography>
  </div>
);

export default Privacy;
