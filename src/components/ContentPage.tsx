import { Paper, PaperProps, styled } from '@mui/material';
import React from 'react';

interface ContentPageProps {
  children: string | React.ReactElement;
}

const MyPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  borderRadius: '15px',
  border: '2px solid',
  padding: '20px',
  marginBottom: '20px',
  borderColor: theme.palette.primary.main
}));

const ContentPage: React.FC<ContentPageProps> = ({ children }) => {
  return <MyPaper elevation={0}>{children}</MyPaper>;
};

export default ContentPage;
