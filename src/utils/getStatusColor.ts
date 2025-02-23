export const getStatusColor = (status: string, style: CSSModuleClasses) => {
  switch (status) {
    case 'В роботі':
      return style.active;
    case 'Виконано':
      return style.completed;
    case 'В дорозі':
      return style.delivery;
    case 'Скасовано':
      return style.canceled;
    default:
      return style.default;
  }
};
