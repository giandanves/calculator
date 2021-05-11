import { calc, percent } from '../calc.js';

class Controller {
  constructor() {
    this.state = '0';
    this.lastStateLog = 0;
    this.stateLog = '';
    this.opChecker = 0;
  }

  get _state() {
    return this.state;
  }

  get _stateLog() {
    return this.stateLog;
  }

  updateStateLog(state, viewState) {
    this.stateLog = state + viewState;
  }

  calcPercent() {
    if (this.stateLog) {
      this.state = percent(this.stateLog, this.state);
    } else {
      this.state = 0;
    }
  }

  getSecondCalcArgument(viewState) {
    this.state = viewState;
    this.opChecker = 0;
  }

  changeOperation(viewState) {
    this.opChecker = 1;
    this.stateLog = this.stateLog.replace(
      `${this.stateLog.substr(length - 1, 1)}`,
      `${viewState}`,
    );
  }

  makeOperation() {
    if (this.stateLog) {
      this.state = calc(this._stateLog + this.state);
    }
  }

  handleOperation(viewState) {
    this.opChecker++;

    if (isNaN(this.lastStateLog)) {
      this.changeOperation(viewState);
    } else {
      this.makeOperation();
    }
    this.updateStateLog(this.state, viewState);
  }

  updateState(viewState) {
    if (viewState == 'del') {
      this.state = this.state.slice(0, -1);
      return this._state;
    }

    if (viewState == '+/-') {
      this.state = this.state * -1;
      return this._state;
    }

    if (viewState == '.') {
      this.state += viewState;
      return this.state;
    }

    if (viewState == 'clear') {
      this.state = 0;
      this.stateLog = '';
      return this._state;
    }

    if (viewState == '=') {
      let calculum = `${this.stateLog} ${this.state}`;
      this.makeOperation();
      this.updateStateLog(calculum, viewState);
      this.lastStateLog = viewState;
      return this._state;
    }

    if (viewState == '%') {
      this.calcPercent();
      return this._state;
    }

    if (
      (this.state == '0' || this.opChecker == 1) &&
      isNaN(viewState) == false
    ) {
      this.getSecondCalcArgument(viewState);
    } else if (isNaN(viewState)) {
      this.handleOperation(viewState);
    } else {
      this.state += viewState;
    }

    this.lastStateLog = viewState;

    return this._state;
  }
}

export default Controller;