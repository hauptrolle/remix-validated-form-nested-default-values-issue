import { ValidatedForm } from "remix-validated-form";
import { Switch } from "~/components/switch";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { zfd } from "zod-form-data";

export const validator = withZod(
  z.object({
    works: zfd.checkbox().optional(),
    nested: z.object({
      notWorking: zfd.checkbox().optional(),
      notWorking2: zfd.checkbox().optional(),
    }),
  })
);

export default function Index() {
  return (
    <div>
      <ValidatedForm
        validator={validator}
        method="post"
        replace={true}
        defaultValues={{
          works: true,
          nested: { notWorking: true, notWorking2: false },
        }}
      >
        <Switch name="works" label="This works" />
        <Switch
          name="nested.notWorking"
          label="Here you can see the defaultChecked state flickering (on reload)"
        />
        <Switch
          name="nested.notWorking2"
          label="Here you can see the defaultChecked state flickering (on reload)"
        />
      </ValidatedForm>
    </div>
  );
}
