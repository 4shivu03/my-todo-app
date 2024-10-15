'use client'
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar = () => (
  <AppBar position="static">
  <Box sx={{display:'flex', justifyContent:'space-between', p:2}}>
  <Box>
  <Link href="/" passHref style={{textDecoration:'none', color:'white', fontSize:25, fontWeight:'bold'}}>Todo App</Link>
    </Box>
    <Box>
    <Link href="/" passHref style={{textDecoration:'none', color:'white', margin:20}}>Home</Link>
    <Link href="/todo" passHref style={{textDecoration:'none', color:'white', margin:20}}>Todo List</Link>
    </Box>
  </Box>
  </AppBar>
);

export default Navbar;
