class Storage {
  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  resetAllData(): void {
    localStorage.clear();
  }
}

export default Storage;
