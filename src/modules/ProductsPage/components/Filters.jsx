import Select from "components/Form/Select";

function Filters({ categories, control }) {
    const allCategories = Array.isArray(categories)
        ? [
            ...categories.map((category) => ({ label: category, value: category })),
            { label: "All", value: "All" },
        ]
        : [];

    return (
        <Select
            name="category"
            label="Category"
            options={allCategories}
            control={control}
        />

    );
}

export default Filters;
