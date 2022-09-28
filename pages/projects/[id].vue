<script setup>
  console.log("Running the setup of [id]")
  const { path } = useRoute();
  console.log()
  const { data, pending } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne())
 
  console.log(path);
  console.log(pending)
  console.log(data)

  // const { data } = await useAsyncData(`content-${path}`, async () => {
  
  //   // fetch document where the document path matches with the current route
  //   let article = await queryContent().where({ _path: path }).findOne();

  //   // console.log(article)
  
  //   // get the surround information,
  //   // which is an array of documeents that come before and after the current document
  //   // let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
  //   return {
  //     article: await article,
  //   //   surround: await surround,
  //   };

  // });

  // console.log("DATA !!!")
  // console.log(data)
  
  // destrucure `prev` and `next` value from data
  // const [prev, next] = data.value.surround;
  
  // set the meta
  // useHead({
  //   title: data.value.article.title,
  //   meta: [
  //     { name: "description", content: data.value.article.description },
  //     {
  //       hid: "og:image",
  //       property: "og:image",
  //       content: `https://site.com/${data.value.article.img}`,
  //     },
  //   ],
  // });
</script>

<template>
  <div>
    <v-img :src="data.coverImage" max-height="200" cover/>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8" offset-xl="2" xl="6">
          <ContentDoc />
        </v-col>
        <v-col cols="12" lg="4" xl="4">
          <hr class="d-lg-none">
          <v-card flat class="bg-transparent mb-4">
            <v-card-title>Need more Info?</v-card-title>
            <v-card-text>Feel free to contact one of our colleague's involved in this project</v-card-text>
          </v-card>
          <v-container class="ma-0 pa-0 mt-2 d-flex flex-wrap flex-lg-column justify-center">
            <SmallContactCard max-width="400" min-width="300" class="ma-2" />
            <SmallContactCard max-width="400" min-width="300" class="ma-2" />
            <SmallContactCard max-width="400" min-width="300" class="ma-2" />
          </v-container>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>