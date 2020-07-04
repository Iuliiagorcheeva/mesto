export default class UserInfo {
  constructor({ name, info }) {
    this._name = name;
    this._info = info;

  }
  getUserInfo(popupName, popupInfo) {
    popupName.value = this._name.textContent;
    popupInfo.value = this._info.textContent;
  }
  setUserInfo(popupName, popupInfo) {
    this._name.textContent = popupName.value;
    this._info.textContent = popupInfo.value;
  } 
}