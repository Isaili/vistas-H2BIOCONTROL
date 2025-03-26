import React from 'react';
import { Card, CardContent, Typography, Box, Grid, IconButton } from '@mui/material';
import { Users, Star, Trophy, Code } from 'lucide-react';

const ProjectCredits = () => {
  const phases = [
    {
      title: "Primera Etapa",
      members: [
        {
          name: "Isai Abel Lopez Sanchez",
          role: "Líder del Proyecto",
          contribution: "Coordinación general del Circuito LOT"
        },
        {
          name: "Armando Rodriguez Villareal",
          role: "Desarrollador",
          contribution: "Trabajo en Circuito LOT"
        },
        {
          name: "Norberto Lopez Gomez",
          role: "Desarrollador",
          contribution: "Desarrollo de Backend y Frontend"
        }
      ]
    },
    {
      title: "Segunda Etapa",
      members: [
        {
          name: "Martin Eduardo Estrada Garcia",
          role: "Apoyo al Equipo",
          contribution: "Soporte y desarrollo"
        },
        {
          name: "Brandon Gomez",
          role: "Apoyo al Equipo",
          contribution: "Colaboración técnica"
        }
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #e0f7fa, #81d4fa)', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: 'auto', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <header style={{ backgroundColor: '#1976d2', color: 'white', textAlign: 'center', padding: '3rem' }}>
          <Users style={{ width: '64px', height: '64px', marginBottom: '16px', color: 'white' }} />
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>Créditos del Proyecto</Typography>
          <Typography variant="body1" style={{ color: '#b3e5fc' }}>H2BIOCONTROL</Typography>
        </header>

        <div style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Trophy style={{ width: '40px', height: '40px', color: '#fbc02d', marginRight: '1rem' }} />
              <Typography variant="h5" style={{ fontWeight: '600', color: '#0d47a1' }}>Dueño del Proyecto</Typography>
            </div>
            <Card style={{ backgroundColor: '#fffde7', padding: '16px', borderRadius: '8px', border: '1px solid #fbc02d' }}>
              <Typography variant="body1" style={{ fontWeight: '500', color: '#424242' }}>Esdras Calvo</Typography>
            </Card>
          </div>

          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Code style={{ width: '40px', height: '40px', color: '#388e3c', marginRight: '1rem' }} />
                <Typography variant="h5" style={{ fontWeight: '600', color: '#0d47a1' }}>{phase.title}</Typography>
              </div>
              <Grid container spacing={2}>
                {phase.members.map((member, memberIndex) => (
                  <Grid item xs={12} md={6} key={memberIndex}>
                    <Card style={{ backgroundColor: '#e1f5fe', padding: '16px', borderRadius: '8px', border: '1px solid #0288d1', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Star style={{ width: '24px', height: '24px', color: '#1976d2', marginRight: '0.75rem' }} />
                        <Typography variant="h6" style={{ fontWeight: '600', color: '#01579b' }}>{member.name}</Typography>
                      </div>
                      <Typography variant="body2" style={{ color: '#424242' }}>
                        <strong>Rol:</strong> {member.role}
                      </Typography>
                      <Typography variant="body2" style={{ color: '#757575' }}>
                        <strong>Contribución:</strong> {member.contribution}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </div>

        <footer style={{ textAlign: 'center', color: '#9e9e9e', padding: '1rem', borderTop: '1px solid #b0bec5' }}>
          <Typography variant="body2">© 2025 H2BIOCONTROL - Todos los derechos reservados</Typography>
        </footer>
      </div>
    </div>
  );
};

export default ProjectCredits;
