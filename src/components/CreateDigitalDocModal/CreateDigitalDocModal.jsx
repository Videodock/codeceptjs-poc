import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '../Input/Input';
import Form from '../Form/Form';
import styles from './CreateDigitalDocModal.styles';

const useStyles = makeStyles(styles);

export default function CreateDigitalDocModal({ initialFormValues, onFormSubmit, onUploadButtonClick }) {
  const { t }   = useTranslation('startCampaign');
  const classes = useStyles();

  const licenses  = [{ label: 'Public', value: 'https://www0.cpdl.org/wiki/index.php/ChoralWiki:CPDL' }];
  const languages = [{ label: 'English', value: 'en' }];

  return (
    <div className={classes.root}>
      <DialogTitle className={classes.title} disableTypography>
        <Typography className={classes.header} variant="h1">
          {t('create_digital_doc.select_own_file')}
        </Typography>
      </DialogTitle>
      <Form onSubmit={onFormSubmit} initialValues={{ ...initialFormValues }}>
        {({ values, handleChange, handleSubmit, handleBlur, setFieldValue }) => (
          <form className={classes.container} onSubmit={handleSubmit}>
            <DialogContent>
              <Input
                label={t('create_digital_doc.score')}
                name="scoreUrl"
                value={values.scoreUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('create_digital_doc.url_example')}
                type="url"
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => onUploadButtonClick('scoreUrl', setFieldValue)}
                    >
                      {t('create_digital_doc.select_file')}
                    </Button>
                  </InputAdornment>
                }
                required
              />
              <Input
                label={t('create_digital_doc.thumbnail')}
                value={values.thumbnailUrl}
                name="thumbnailUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('create_digital_doc.url_example')}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => onUploadButtonClick('thumbnailUrl', setFieldValue)}
                    >
                      {t('create_digital_doc.select_file')}
                    </Button>
                  </InputAdornment>
                }
                required
              />
              <Input
                label={t('create_digital_doc.score_title')}
                placeholder={t('create_digital_doc.score_title')}
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <Input
                label={t('create_digital_doc.editor')}
                placeholder={t('create_digital_doc.editor')}
                name="creator"
                value={values.creator}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              {/*
              TEMP: for now not necessary
              <Input
                label={t('create_digital_doc.publisher')}
                value={values.campaignTitle}
                onChange={handleChange}
                onBlur={handleBlur}
              /> */}
              <Input
                label={t('create_digital_doc.copyright')}
                placeholder={t('create_digital_doc.copyright')}
                value={values.license}
                name="license"
                onChange={handleChange}
                onBlur={handleBlur}
                select
              >
                {licenses.map(option => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem> 
                ))}
              </Input>
              <Input
                label={t('create_digital_doc.language')}
                placeholder={t('create_digital_doc.language')}
                name="language"
                value={values.language}
                onChange={handleChange}
                onBlur={handleBlur}
                select
              >
                {languages.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Input>
              <Input
                label={t('create_digital_doc.notes')}
                placeholder={t('create_digital_doc.notes')}
                value={values.description}
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                rows={3}
                multiline
              />

            </DialogContent>
            <DialogActions>
              <div className={classes.buttons}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {t('create_digital_doc.upload')}
                </Button>
              </div>
            </DialogActions>
          </form>
        )}
      </Form>
    </div>
  );
}

CreateDigitalDocModal.propTypes = {
  initialFormValues  : PropTypes.object.isRequired,
  onFormSubmit       : PropTypes.func.isRequired,
  onUploadButtonClick: PropTypes.func.isRequired,
};

