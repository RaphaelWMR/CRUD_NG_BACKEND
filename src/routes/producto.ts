import { Router } from "express";
import { getProducts, getProduct, deleteProduct, postProduct } from '../controllers/producto';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct)
router.delete('/:id', deleteProduct)
router.post('/', postProduct)
export default router;