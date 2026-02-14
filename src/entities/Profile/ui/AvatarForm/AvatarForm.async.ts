import { FC, lazy } from 'react';
import { AvatarFormProps } from './AvatarForm';

export const AvatarFormAsync = lazy<FC<AvatarFormProps>>(() => import('./AvatarForm'));