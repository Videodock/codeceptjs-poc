import React from 'react';
import * as PropTypes from 'prop-types';
import {  withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import QontoStepIcon from "../QontoStepIcon/QontoStepIcon";

const QontoConnector = withStyles({
  alternativeLabel: {
    top  : 10,
    left : 'calc(-50% + 5px)',
    right: 'calc(50% + 5px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor   : 'transparent',
    borderTopWidth: 5,
    borderRadius  : 5,
  },
})(StepConnector);

export default function ProgressStepper({ activeStep, steps }) {
  return (
    <Stepper activeStep={activeStep} connector={<QontoConnector />} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

ProgressStepper.propTypes = {
  activeStep: PropTypes.number,
  steps     : PropTypes.array,
};
