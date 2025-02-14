import create from 'zustand';

const useStore = create((set) => ({
  components: [],
  addComponent: (component) => set((state) => ({
    components: [...state.components, component],
  })),
  removeComponent: (index) => set((state) => ({
    components: state.components.filter((_, i) => i !== index),
  })),
  setComponents: (components) => set({ components }),
}));

export default useStore;