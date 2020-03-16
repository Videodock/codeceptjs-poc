import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import images from '../../theme/images';
import NavBar from '../../components/NavBar/NavBar';
import * as startupActions from '../../redux/Startup/Startup.actions';
import styles from './Home.styles';

const useStyles = makeStyles(styles);

export default function Home() {
  const { t }    = useTranslation('home');
  const classes  = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startupActions.startup());
  }, [dispatch]);

  const renderDrawerContent = () => {
    return (
      <div />
    );
  };

  return (
    <div>
      <Helmet>
        <title>{t('page_title')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <NavBar
        navLinks={[
          { name: t('home'), to: '/' },
          { name: t('start_campaign'), to: '/createCampaign' },
        ]}
        buttons={[
          { name: t('join_campaign'), to: 'campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c' },
        ]}
        renderDrawerContent={renderDrawerContent}
      />
      <Jumbotron
        image={images.collaborateHero}
        text={{
          prefixTitle          : t('trompa_collaboration_campaign_manager'),
          primaryTitle         : t('make_more_memorable'),
          secondaryTitle       : t('help_us'),
          introductionParagraph: t('create_modern_classics'),
        }}
      >
        <Button
          className={classes.buttonHero}
          component={Link}
          to="campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c"
          variant="contained"
          color="primary"
        >
          {t('join_campaign')}
        </Button>
      </Jumbotron>
    </div>
  );
}
