import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('lizaed', {
  getStatus: (): Promise<{ mode: string; backend: string; provider: string }> => ipcRenderer.invoke('agent:status')
});
