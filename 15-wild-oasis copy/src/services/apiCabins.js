
import supabase from "./supabase";
import { supabaseUrl } from '../services/supabase'
export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*');
    if (error) {
        console.log(error);
        throw new Error('cabins cannot be loaded');
    }
    return data;
}

export async function createEditCabin(newCabin, id) {
    /**
     * 3 steps to upload image
     */

    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random() * 1000}-${newCabin.image.name}`
        .replaceAll("/", "");

    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    //1. create cabin
    let query = supabase.from('cabins');

    //1.1 create cabin if no ide
    if (!id) {
        query = query
            .insert([{ ...newCabin, image: imagePath }])
    }

    //1.2 edit cabin if id exists
    if (id) {
        query = query
            .update({ ...newCabin, image: imagePath })
            .eq("id", id)
    }

    //1.3 then insert
    const { data, error } = await query
        .select()
        .single();

    if (error) {
        console.log(error);
        throw new Error('cabin canot be created');
    }

    //2 upload image

    if (hasImagePath) return data;

    const { error: storageError } =
        await supabase.storage
            .from('cabin-images')
            .upload(imageName, newCabin.image)

    //3. delete cabin if there is an error during image upload
    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);
        throw new Error('Error happened during uploading image, cabin is not created');
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.log(error);
        throw new Error('cabin id cannot be found');
    }
    return data;
}


