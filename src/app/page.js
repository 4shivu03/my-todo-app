import React from 'react';
import Link from 'next/link';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Container >
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2 
                  }}
                >
                <Typography variant="h4" gutterBottom>User Login</Typography>
                  <TextField fullWidth label="User Name"/>
                  <TextField fullWidth label="Password" variant="outlined" />
                  <Button variant="contained">Sign in</Button>
                  <Link href="#">Forgot Password?</Link>
                  <Link href="#">Don't Have An Account? Sign Up</Link>
                </Box>
            </Card>
      </Container>
    </>
  );
}
