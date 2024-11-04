import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Rendimiento adaptable',
    description:
      'Nuestro producto se ajusta sin esfuerzo a sus necesidades, aumentando la eficiencia y simplificando sus tareas..',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Construido para durar',
    description:
      'Experimente una durabilidad inigualable que va más allá con una inversión duradera.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Gran experiencia de usuario',
    description:
      'Integre nuestro producto en su rutina con una interfaz intuitiva y fácil de usar.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Funcionalidad innovadora',
    description:
      'Manténgase a la vanguardia con funciones que establecen nuevos estándares y abordan sus necesidades cambiantes mejor que el resto.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Soporte confiable',
    description:
      'Cuente con nuestro atento servicio de atención al cliente, que ofrece asistencia que va más allá de la compra.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precisión en cada detalle',
    description:
      'Disfrute de un producto meticulosamente elaborado donde los pequeños toques tienen un impacto significativo en su experiencia general.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Lo que ofrecemos
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore por qué nuestro producto se destaca: adaptabilidad, durabilidad,
            diseño fácil de usar e innovación. Disfrute de un soporte al cliente confiable y
            Precisión en cada detalle.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
