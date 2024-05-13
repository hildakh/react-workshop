/** @jsxImportSource @emotion/react */
interface Props {
  setMyTasksDone: () => void;
}

export const TasksDoneButton: React.FC<Props> = ({ setMyTasksDone }) => {

  return (
    <button css={{
      backgroundColor: 'green',
      width: '300px',
      height: '50px',
      fontSize: '20px',
    }}
      onClick={setMyTasksDone}
    >
      Mark all tasks as done
    </button>
  )
}

export default TasksDoneButton;
