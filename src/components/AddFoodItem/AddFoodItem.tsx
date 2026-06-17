import "./AddFoodItem.css";

type AddFoodItemProps = {
  onClose: () => void;
};

export default function AddFoodItem({ onClose }: AddFoodItemProps) {
  return (
    <div className="modal-backdrop">
      <div className="add-ingredient-modal">
        <button onClick={onClose}>X</button>

        <h2>Add Food Item</h2>
        <p>Add Food Item Placeholder</p>
      </div>
    </div>
  );
}