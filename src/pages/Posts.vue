<template>
  <h1>Posts List</h1>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form class="form-control">
          <label>Title:</label>
          <input type="text" class="form-control"/>
           <label>Description:</label>
          <textarea type="text" class="form-control"></textarea>
          <button type="submit" class="btn btn-success mt-3">create</button>
        </form>
      </div>
      <hr/>
      <div class="col-md-9">
        <table class="table">
          <tbody >
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
            <tr>
              <td>first</td>
              <td>second description</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Posts-Page',

    setup:{

    }

}
</script>

<style>

</style>