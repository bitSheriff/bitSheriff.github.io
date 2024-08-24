---
title: "Module Tests with CUnit"
summary: "How to setup CUnit and write module tests"
categories: ["Blog", "DevLog"]
tags: ["c", "software testing"]
#externalUrl: ""
#showSummary: true
date: 2023-03-10
draft: false
---

# Module Tests with CUnit

Some friends and me stated a small project, where we play around with a library called SDL2. This library provides a lot of functions regarding graphics, inputs, audio and so on. But this is a top for a future post.

Today I want to talk about I setup CUnit for this fast growing [project](https://github.com/luisgargitter/sdl-projection).

So why do I write this post? Well, it took me way longer than I thought because I ean into some problems which I did not find an online solution for. So I hope this post will help you to setup CUnit for your project.

## What is a module test?

A _module test_ is a test which tests a single module of your project. This module can be a single function, a group of functions or even a whole file. The important thing is, that you test a single module.

## What is CUnit and how to install it?

[CUnit](https://cunit.sourceforge.net) is a unit testing framework for C. It is a simple framework, which provides a lot of functions to write unit tests.

To install CUnit on a debian based system, you can use the following command:

```bash
    sudo apt-get install libcunit1 libcunit1-doc libcunit1-dev
```

## Setup

Well, there is not only one _right_ version because it depends on your project structure and how you want to use CUnit.
For me, I set the requirement that I want to have a _build target_ for the module test, so it is convenient to build the tests. Furthermore the tests should be hidden behind a define, so the tests are not included in the final binary.

### Makefile Target

To be honest this part took my way too long. The problem I had was, that I wanted to set the define only on the one build target, but had no chance to pass this define to the different targets.

Adding them to the `CFLAGS` variable was not possible per default, because then the define would be set for all targets.

So I had an idea to alter the `CFLAGS`variable in the specific case. This took me like forever. I tried different methods to add the `-D` flag to the other ones, like `+=` or `:=`, but nothing worked.

So the final version, which worked was:

```makefile

CFLAGS = -g -Wall


%.o: %.c $(HEADERS)
	$(CC) $(CFLAGS) -c $< -o $@


test: clean --test-pre  --test

--test-pre:
	echo "Pre Build Test..."
	# adding following test flags to the CFLAGS
	$(eval CFLAGS += -DCTEST)

# private target, cannot be called from outside, please call test
--test: $(OBJECTS)
	echo "Linking Test..."
	$(CC) $(CFLAGS) $(OBJECTS) $(LIBS) $(TEST_LIBS) -o $(TEST_TARGET)
```

So the `--test-pre` target is called before the `--test` target. This target adds the `-DCTEST` flag to the `CFLAGS` variable. If targets have the prefix `--` they cannot be called from outside, which i did not know before. This way no one can call the target without the pre build is called.

So now its time to write the tests.

### CUnit Suite

Most important thing is to implement the test suite. This is where all the test cases get called.
The Suite needs an init and cleanup function. There you can setup and teardown the test environment. If you don't need this, you can just return `CUE_SUCCESS`.

```c
#include <CUnit/CUnit.h>
#include <CUnit/Basic.h>


/* ------==================------ */
/* ------====== TEST ======------ */
/* ------==================------ */

#ifdef CTEST

static int initSuite(void)
{
    return CUE_SUCCESS;
}

static int cleanupSuite(void)
{
    return CUE_SUCCESS;
}

int test_main()
{
    /* initialize the CUnit test registry */
    if (CUE_SUCCESS != CU_initialize_registry())
        return CU_get_error();

    CU_pSuite pSuite = CU_add_suite("SDL-Projection",
                                    initSuite,
                                    cleanupSuite);

    /* check if the suite was created successfully */
    if (NULL == pSuite) {
        CU_cleanup_registry();
    }

    /* add here all tests */
    if ( (NULL == CU_add_test(pSuite, "cubeNew interface", test_cubeNew)) )
    {
       CU_cleanup_registry();
    }

    CU_basic_set_mode(CU_BRM_VERBOSE);
    CU_basic_run_tests();

    return CU_get_error();
}
#endif
```

The `CU_basic_set_mode(CU_BRM_VERBOSE)` sets the output to _maximum_ so every test case information is printed to the console.

In the real `main` function, you need to add the following code, so in the test mode the `test_main` function is called.

```c
#ifdef CTEST
    printf("Unit Test Mode\n");
    test_main();
    return 0;
#endif
```

So in the test mode, I only want to execute the test functions without the normal program flow.

### First module test

Let's write a simple test case.

```c
/* ------==================------ */
/* ------====== TEST ======------ */
/* ------==================------ */

#ifdef CTEST

/**
* @brief Test the cubeNew Interface
*/
void test_cubeNew()
{
    object_t obj;   /* empty object, not needed */

    /* test if a call with edglen smaller than zero triggers an error */
    CU_ASSERT_EQUAL( cubeNew(-1.0f, &obj), ERR_NULLPTR);

    /* test if a null object triggers an error */
    CU_ASSERT_EQUAL( cubeNew(3.0f, NULL), ERR_NULLPTR);
}
#endif
```

Because this test case is located in the file `cube.c`, it has full access to the local functions and variables.
To work you have to add the `test_cabeNew()` function header to the `cube.h` file, so it is visible to the `main.c` source file.

### Result

To test the tests, just build and run the program.

```bash
    make test && ./test
```

_(i use a different name for the binary to clarify that it is the test, not the normal application)_

Now you should see the following output:

```bash

CUnit - A unit testing framework for C - Version 2.1-3
http://cunit.sourceforge.net/


Suite: SDL-Projection
  Test: cubeNew interface ...passed

Run Summary:    Type  Total    Ran Passed Failed Inactive
              suites      1      1    n/a      0        0
               tests      1      1      1      0        0
             asserts      2      2      2      0      n/a

Elapsed time =    0.000 seconds
```

I checked 2 asserts in 1 test case.

## Outlook

Because this projects highly depends on mathematical calculations, it can be hard to test the functionality with the resulting application. Therefore a unit test is a good way to test the functionality of the modules.

Another way of developing is to write the tests first and then implement the functionality. This is called _Test Driven Development_ (TDD). This can be very helpful, if the project is not steadily developed and more like a stop&go-development, which is the case for me. With this technique you can split the work in small amounts and test the functionality after each step.

So the plan is to stuck to testing and implement the tests parallel to the functionality.

{{< typeit tag=h3 speed=40 breakLines=false loop=true >}}
Keep on testing you code pals! "Work's on my machine" is not enough ;)
{{< /typeit >}}

{{< github repo="luisgargitter/sdl-projection" >}}
