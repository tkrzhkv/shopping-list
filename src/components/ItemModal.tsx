import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { api } from "~/utils/api";

interface ItemModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ItemModal: FC<ItemModalProps> = ({ setModalOpen }) => {
  const [input, setInput] = useState<string>("");

  const { mutate: addItem } = api.items.addItem.useMutation();

  return (
    <div className=" absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-40">
      <div className=" space-y-4 rounded-md bg-gray-200 p-6 ">
        <h3 className="text-xl font-medium">Name of item</h3>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-violet-300 focus:ring focus:ring-purple-300"
        />

        <div className="grid grid-cols-2">
          <button
            onClick={() => setModalOpen(false)}
            type="button"
            className="mr-2 rounded-md bg-gray-500 p-2 text-sm text-white transition hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              addItem({ name: input }), setModalOpen(false);
            }}
            className="rounded-md bg-violet-500 p-2 text-sm text-white transition hover:bg-violet-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
