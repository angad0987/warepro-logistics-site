import receiving from "@/assets/op-receiving.webp";
import picking from "@/assets/picking.webp";
import packing from "@/assets/packing.webp";
import dispatch from "@/assets/dispatch.webp";
import storage from "@/assets/storage.webp";
import inventory from "@/assets/inventory.webp";

export const opImages: Record<string, string> = {
  receiving,
  picking,
  packing,
  dispatch,
  storage,
  inventory,
};

export const opImageSizes: Record<string, { width: number; height: number }> = {
  receiving: { width: 800, height: 563 },
  picking: { width: 800, height: 533 },
  packing: { width: 800, height: 533 },
  dispatch: { width: 800, height: 533 },
  storage: { width: 800, height: 533 },
  inventory: { width: 800, height: 533 },
};
