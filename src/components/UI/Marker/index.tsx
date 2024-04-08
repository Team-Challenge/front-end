import { getStatusColor } from '@/utils/getStatusColor';
import s from './Marker.module.scss';

export const Marker = ({ status }: { status: string }) => {
  const statusColor = getStatusColor(status, s);

  return <span className={`${s.marker} ${statusColor}`} />;
};
