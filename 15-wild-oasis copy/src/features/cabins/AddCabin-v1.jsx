import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";
/** new version with compound componnet  */

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        <Modal.Open opens="table">
          <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window>
      </Modal>
    </div>
  );
}

/** Old version without componoud componnet  */

// export default function AddCabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setisOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setisOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setisOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }
