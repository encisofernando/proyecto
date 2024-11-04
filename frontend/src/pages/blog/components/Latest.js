import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const articleInfo = [
  {
    tag: 'Ingeniería',
    title: 'El futuro de la IA en la ingeniería de software',
    description:
      'La inteligencia artificial está revolucionando la ingeniería de software. Explora cómo las herramientas impulsadas por IA están mejorando los procesos de desarrollo y la calidad del software.',
    authors: [
      { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    tag: 'Producto',
    title: 'Impulsando el crecimiento con un diseño centrado en el usuario',
    description:
      'Nuestro enfoque de diseño de productos centrado en el usuario está impulsando un crecimiento significativo. Conoce las estrategias que empleamos para crear productos que resuenan con los usuarios.',
    authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    tag: 'Diseño',
    title: 'Adoptando el minimalismo en el diseño moderno',
    description:
      'El minimalismo es una tendencia clave en el diseño moderno. Descubre cómo nuestro equipo de diseño incorpora principios minimalistas para crear experiencias de usuario limpias e impactantes.',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    tag: 'Compañía',
    title: 'Cultivando una cultura de innovación',
    description:
      'La innovación está en el corazón de nuestra cultura empresarial. Conoce las iniciativas que tenemos en marcha para fomentar la creatividad y desarrollar soluciones innovadoras.',
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    tag: 'Ingeniería',
    title: 'Avanzando en ciberseguridad con soluciones de próxima generación',
    description:
      'Nuestras soluciones de ciberseguridad de próxima generación están estableciendo nuevos estándares en la industria. Descubre cómo protegemos a nuestros clientes de las amenazas cibernéticas en evolución.',
    authors: [
      { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    tag: 'Producto',
    title: 'Mejorando la experiencia del cliente a través de la innovación',
    description:
      'Nuestros enfoques innovadores están mejorando la experiencia del cliente. Conoce las nuevas funciones y mejoras que están encantando a nuestros usuarios.',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    tag: 'Ingeniería',
    title: 'Pioneros en soluciones de ingeniería sostenible',
    description:
      'Conoce nuestro compromiso con la sostenibilidad y las soluciones de ingeniería innovadoras que estamos implementando para crear un futuro más verde. Descubre el impacto de nuestras iniciativas ecológicas.',
    authors: [
      { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    tag: 'Producto',
    title: 'Maximizando la eficiencia con nuestras últimas actualizaciones de producto',
    description:
      'Nuestras recientes actualizaciones de producto están diseñadas para ayudarte a maximizar la eficiencia y lograr más. Obtén un resumen detallado de las nuevas funciones y mejoras que pueden elevar tu flujo de trabajo.',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    tag: 'Diseño',
    title: 'Diseñando para el futuro: tendencias y perspectivas',
    description:
      'Mantente a la vanguardia con las últimas tendencias y perspectivas en diseño. Nuestro equipo de diseño comparte su experiencia en la creación de experiencias de usuario intuitivas y visualmente impactantes.',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    tag: 'Compañía',
    title: 'La trayectoria de nuestra compañía: hitos y logros',
    description:
      'Echa un vistazo a la trayectoria de nuestra compañía y los hitos que hemos alcanzado en el camino. Desde nuestros humildes comienzos hasta convertirnos en líderes de la industria, descubre nuestra historia de crecimiento y éxito.',
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
  },
];


const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">Julio 14, 2021</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default function Latest() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Lo Último
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {articleInfo.map((article, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                height: '100%',
              }}
            >
              <Typography gutterBottom variant="caption" component="div">
                {article.tag}
              </Typography>
              <TitleTypography
                gutterBottom
                variant="h6"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
              >
                {article.title}
                <NavigateNextRoundedIcon
                  className="arrow"
                  sx={{ fontSize: '1rem' }}
                />
              </TitleTypography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {article.description}
              </StyledTypography>

              <Author authors={article.authors} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
        <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
      </Box>
    </div>
  );
}
