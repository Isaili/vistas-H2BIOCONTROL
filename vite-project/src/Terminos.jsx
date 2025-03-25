import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Stack
} from '@mui/material';
import { 
  Security as SecurityIcon, 
  LockOutlined as LockIcon, 
  DataUsage as DatabaseIcon, 
  Language as GlobeIcon, 
  StarBorder as StarIcon 
} from '@mui/icons-material';

const PrivacyPolicy = () => {
  const sectionStyle = {
    borderRadius: 2,
    p: 3,
    mb: 2
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          borderRadius: 3, 
          overflow: 'hidden' 
        }}
      >
        <Box 
          sx={{ 
            bgcolor: 'primary.main', 
            color: 'white', 
            textAlign: 'center', 
            py: 4 
          }}
        >
          <SecurityIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" fontWeight="bold">
            Políticas de Privacidad
          </Typography>
          <Typography variant="subtitle1">
            Proyecto H2BIOCONTROL
          </Typography>
        </Box>

        <Box sx={{ p: 3 }}>
          <Paper 
            variant="outlined" 
            sx={{ 
              ...sectionStyle, 
              bgcolor: 'blue.50', 
              borderColor: 'blue.200' 
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LockIcon sx={{ color: 'primary.main', mr: 2 }} />
              <Typography variant="h6" color="primary">
                Protección de Datos
              </Typography>
            </Box>
            <Typography>
              En H2BIOCONTROL, garantizamos la máxima confidencialidad y seguridad de todos los datos relacionados con nuestra innovadora investigación en biorreactores de hidrógeno.
            </Typography>
          </Paper>

          <Paper 
            variant="outlined" 
            sx={{ 
              ...sectionStyle, 
              bgcolor: 'green.50', 
              borderColor: 'green.200' 
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <DatabaseIcon sx={{ color: 'success.main', mr: 2 }} />
              <Typography variant="h6" color="success.main">
                Tipos de Datos Recopilados
              </Typography>
            </Box>
            <List>
              {[
                'Datos de investigadores y personal técnico',
                'Información detallada de rendimiento del biorreactor',
                'Métricas precisas de producción de hidrógeno',
                'Registros exhaustivos de mantenimiento',
                'Información de contacto para colaboraciones científicas'
              ].map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <StarIcon sx={{ color: 'success.light' }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper 
            variant="outlined" 
            sx={{ 
              ...sectionStyle, 
              bgcolor: 'purple.50', 
              borderColor: 'purple.200' 
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <GlobeIcon sx={{ color: 'secondary.main', mr: 2 }} />
              <Typography variant="h6" color="secondary">
                Uso Exclusivo de Datos
              </Typography>
            </Box>
            <List>
              {[
                'Investigación avanzada en biorreactores',
                'Desarrollo de tecnologías de hidrógeno verde',
                'Publicaciones científicas de alto impacto',
                'Colaboraciones estratégicas internacionales'
              ].map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <StarIcon sx={{ color: 'secondary.light' }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper 
            variant="outlined" 
            sx={{ 
              ...sectionStyle, 
              bgcolor: 'warning.50', 
              borderColor: 'warning.200' 
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SecurityIcon sx={{ color: 'warning.main', mr: 2 }} />
              <Typography variant="h6" color="warning.main">
                Compromisos Adicionales
              </Typography>
            </Box>
            <Stack spacing={1}>
              {[
                'Transparencia total en el manejo de información',
                'Protección de datos con tecnología de vanguardia', 
                'Cumplimiento estricto de normativas internacionales'
              ].map((item, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center' 
                  }}
                >
                  <StarIcon 
                    sx={{ 
                      color: 'warning.light', 
                      mr: 2, 
                      fontSize: 20 
                    }} 
                  />
                  <Typography>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>

        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 2, 
            borderTop: 1, 
            borderColor: 'divider' 
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 H2BIOCONTROL - Todos los derechos reservados
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Última actualización: 25/3/2025
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;