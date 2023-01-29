/** Localstorage Service */
export default class storageService {
  private _$w: Window;

  constructor(){
    this._$w = window;
  }

  /**
   * Stores a key:value pair
   * @param {String} key - The localstorage key
   * @param {Object} value - The localstorage value
   */
  set(key: string, value: any){
    this._$w.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieves value by key
   * @param {String} key - The localstorage key
   * @return {Object} value
   */
  get(key: string){
    return JSON.parse(this._$w.localStorage.getItem(key)!);
  }

  /**
   * Removes key:value pair
   * @param {String} key - The localstorage key
   */
  remove(key: string){
    this._$w.localStorage.removeItem(key);
  }

  /**
   * Clears all storage
   */
  clear(){
    this._$w.localStorage.clear();
  }
}
