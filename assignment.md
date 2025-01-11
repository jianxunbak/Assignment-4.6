## Assignment

### Brief

You have now successfully configured a workflow that contains CI and CD jobs. 

CI Jobs:
- build
- test

CD Jobs:
- publish
- deploy (this is optional)

In this assignment, let us take a baby step to configure our `config.yml` file a little closer to a production requirement:

1. Run only the `build` and `test` jobs when `main` branch is updated.
1. Run all the jobs (including `publish` and `deploy` jobs) when `release` branch is updated

**Optional**
1. Modify the workflow so that the `publish` and `deploy` jobs would run if a [Git Tag](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag) is being created for Semantic Versioning.
1. Include tag (version number) in the `docker/build` and `docker/push` commands under `build-and-push` job. You have to use [Circle CI Parameter](https://circleci.com/docs/pipeline-variables/)

### Submission 

- Submit the URL of the GitHub Repository that contains your work to NTU black board.
- Should you reference the work of your classmate(s) or online resources, give them credit by adding either the name of your classmate or URL. 

### References

_Example of Referencing Classmate_

Referenced the code block below from Terence.
```js
    function printMe(){
        console.log("I am a reference example");
    }
```

_Example of Referencing Online Resources_

- https://developer.mozilla.org/en-US/
- https://www.w3schools.com/html/
- https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github

