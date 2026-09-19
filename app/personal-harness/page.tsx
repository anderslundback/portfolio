"use client";
import { Typography, Link } from "@mui/material";
import React from "react";

const PersonalHarness: React.FC = () => (
  <div className="is-text" data-testid="PersonalHarness">
    <Typography variant="h4" component="h1">
      anderslundback-harness
    </Typography>
    <Typography paragraph>
      {`anderslundback-harness is a personal AI assistant. It lets its owner, Anders Lundbäck, use Gmail, Google Calendar and Google Drive by talking to Claude, for example to search email, draft and send messages, manage calendar events, or find files.`}
    </Typography>
    <Typography paragraph>
      {`It is for personal use by its owner only. It is not offered to the public, and there is nothing to sign up for or download.`}
    </Typography>
    <Typography variant="h5" component="h2">
      What it does
    </Typography>
    <Typography paragraph>
      {`• Gmail: search and read mail, compose, send and organise messages with labels.`}
    </Typography>
    <Typography paragraph>
      {`• Google Calendar: view and edit calendar events.`}
    </Typography>
    <Typography paragraph>
      {`• Google Drive, Docs, Sheets and Contacts: read-only access to find and read files and contacts.`}
    </Typography>
    <Typography variant="h5" component="h2">
      Your data
    </Typography>
    <Typography paragraph>
      {`The assistant only acts on requests made by its owner. Read the `}
      <Link href="/privacy">privacy policy</Link>
      {` for details on what data is accessed, how it is used and how access can be revoked.`}
    </Typography>
    <Typography paragraph>
      {`Questions? Contact `}
      <Link href="mailto:lundback.anders@gmail.com">
        lundback.anders@gmail.com
      </Link>
      {`.`}
    </Typography>
  </div>
);

export default PersonalHarness;
