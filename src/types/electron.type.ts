export interface ElectronAPI {
  ping: () => Promise<string>;
  setTitle: (title: string) => void;
  openFile: () => Promise<string>;
  onUpdateCounter: (callback: (value: number) => void) => void;
  counterValue: (value: number) => void;
}
