import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Job, jobs } from "./jobs";
import styles from "../../styles/Experience.module.scss";

interface ResumeSectionProps {
  jobs: Job[];
}

const Experience: React.FC<ResumeSectionProps> = ({}) => {
  return (
    <Container className={styles.root}>
      <Typography variant="h2" component="h1" gutterBottom>
        Resume
      </Typography>
      {jobs.map((job, index) => (
        <Box key={index} className={styles.company}>
          <Typography variant="h5" gutterBottom>
            {job.company}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {job.location}
          </Typography>
          <List>
            {job.roles.map((role) => (
              <ListItem key={role.id} className={styles.role}>
                <Paper elevation={3} className="p-4 w-full">
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        className={styles.roleTitle}
                      >
                        {role.title}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" className={styles.roleDate}>
                          {role.years}
                        </Typography>
                        <Typography variant="body1">
                          {role.description}
                        </Typography>
                        {role.skills && (
                          <Typography variant="body1">
                            <strong>Skills:</strong> {role.skills}
                          </Typography>
                        )}
                      </>
                    }
                  />
                </Paper>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Container>
  );
};

export default Experience;
