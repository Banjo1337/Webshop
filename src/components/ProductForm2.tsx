import { Grid } from "@mui/material";
import { Field } from "formik";

export interface Props {
  formName: string;
}

export default function Productform2(props: Props) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={6}>
        <Field
          type='text'
          placeholder='Title'
          label='Title'
          name={`${props.formName}.title`}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          type='text'
          placeholder='Author'
          label='Author'
          name={`${props.formName}.author`}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          as='select'
          placeholder='Genre'
          label='Genre'
          name={`${props.formName}.genre`}
          variant='outlined'
        >
          <option value='Roman'>Roman</option>
          <option value='Deckare'>Deckare</option>
          <option value='Kokbok'>Kokbok</option>
          <option value='Barnbok'>Barnbok</option>
          <option value='Träning'>Träning</option>
          <option value='Fakta'>Fakta</option>
        </Field>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          type='text'
          placeholder='Price in kr'
          label='Price'
          name={`${props.formName}.price`}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          as='textarea'
          placeholder='Description'
          label='Description'
          name={`${props.formName}.description`}
          variant='outlined'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          type='text'
          placeholder='Image URL'
          label='Image'
          name={`${props.formName}.image`}
          variant='outlined'
        />
      </Grid>
    </Grid>
  );
}
