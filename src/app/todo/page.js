'use client'
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import { EditAttributes, EditNote, EditNoteOutlined, EditNoteRounded } from '@mui/icons-material';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isedit, setisedit] = useState(false);
  const [id, setid] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };
  const updateTodo = () => {
    if (newTodo.trim() && id !== null) {
      const updatedTodos = todos.map((todo, index) => (
        index === id ? newTodo.trim() : todo
      ));
      setTodos(updatedTodos);
      setNewTodo('');
      setIsEdit(false);
      setCurrentIndex(null);
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const editTodo = (todo,index) => {
    setNewTodo(todo)
    setid(index)
    setisedit(true)
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <TextField
        label="New To-Do"
        variant="outlined"
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {!isedit && <Button variant="contained" color="primary" onClick={addTodo} style={{ marginTop: '10px', marginRight:5 }}>
        Add To-Do
      </Button>}
      {isedit && <Button variant="contained" color="primary" onClick={updateTodo} style={{ marginTop: '10px', marginRight:5 }}>
        Update To-Do
      </Button>}
      <Link href="/" passHref >
        <Button variant="contained" color="primary" style={{ marginTop: '10px', marginLeft:5 }}>
          Go to Home
        </Button>
      </Link>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index} secondaryAction={
            <>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(index)} style={{color:'#b71c1c'}}>
              <DeleteIcon style={{fontSize:50}}/>
            </IconButton>
            <IconButton edge="end" aria-label="Edit" onClick={() => editTodo(todo,index)} style={{color:'#00e676'}}>
              <EditNote />
            </IconButton>
          </>
          }>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
