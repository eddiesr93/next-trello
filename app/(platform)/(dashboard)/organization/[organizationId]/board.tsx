import { DeleteBoard } from '@/actions/delete-board';
import { FormDelete } from '@/app/(platform)/(dashboard)/organization/[organizationId]/form-delete';

type Props = {
  title: string;
  id: string;
};

export const Board = ({ id, title }: Props) => {
  const deleteBoardWithId = DeleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className='flex items-center gap-x-2'>
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
};
