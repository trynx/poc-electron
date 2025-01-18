export interface ElectronAPI {
  ping: () => Promise<string>;
  setTitle: (title: string) => void;
}
