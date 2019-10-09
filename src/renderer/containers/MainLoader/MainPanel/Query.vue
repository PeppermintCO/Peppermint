<template>
  <div class="test-component">
    Query
    <form action="">
      Selector Name <input type='text'>

      <select name="query-variant">
        <option value="getBy">getBy</option>
        <option value="findBy">findBy</option>
        <option value="queryBy">queryBy</option>
        <option value="getAllBy">getAllBy</option>
        <option value="findAllBy">findAllBy</option>
        <option value="queryAllBy">queryAllBy</option>
      </select>

      <select name="query-type">
        <option value="LabelText">LabelText</option>
        <option value="PlaceholderText">PlaceholderText</option>
        <option value="Text">Text</option>
        <option value="DisplayValue">DisplayValue</option>
        <option value="AltText">AltText</option>
        <option value="Title">Title</option>
        <option value="Role">Role</option>
        <option value="TestId">TestId</option>
      </select>
      <input type='text'/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Query'
}
</script>
