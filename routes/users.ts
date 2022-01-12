import { Router } from 'express'; 
import { deleteUser, getUser, getUsers, postUsers, putUser } from '../controllers/users';

const router = Router();

router.get('/',     getUsers );
router.get('/:id', getUser );
router.post('/',    postUsers );
router.put('/:id', putUser );
router.delete('/:id', deleteUser );

export default router;