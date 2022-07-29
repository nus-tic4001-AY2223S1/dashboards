%%[This page was last updated on 2022-04-15 @22:30]%%


<panel type="info" header="### 1. CHON.. WEI `@warrencxw` (154 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/24#discussion_r818667177" expanded>

Would be good to elaborate on what the Profile itself actually means or represents.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/24#discussion_r818668001" expanded>

This is slightly problematic, might not be what you are trying to achieve. Do you mean the following?
```suggestion
        return sessionIdTracker += 1;
```

Or do you require the user to call getNewSessionId(), then updateSessionIdTracker()?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/55#discussion_r819620452" expanded>

Maybe can phrase it as "Constructs a Person object" instead, may sound slightly weird otherwise
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/55#discussion_r819622097" expanded>

Likewise for this, perhaps an "ActivityCost object" may be much more informative than "activityCost"
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/55#discussion_r819625283" expanded>

The constructor should not be worried with regards to the input value. The Command classes should, when parsing, take note if the values are invalid and then catch the exceptions before the constructor is called.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/63#discussion_r819684442" expanded>

Would be good to standardise to use "Syntax: session /delete /sid \&gt;SESSIONID>"
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/75#discussion_r820049751" expanded>

Would be good if it was named "totalCost" to be more representative of what it stores.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/87#discussion_r820121092" expanded>

Consider adding a white space between description and return annotation to follow JavaDocs convention.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/87#discussion_r820121112" expanded>

Consider adding a white space between description and return annotation to follow JavaDocs convention.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/109#discussion_r820249082" expanded>

This method could be abstracted to use the two methods above instead.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/115#discussion_r820469396" expanded>

Consider phrasing as just "@return A SessionCreateCommand object if ..., a InvalidCommand object if ..."
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/117#discussion_r820634532" expanded>

Consider naming i as activityCost instead, i is reserved for a numerical iterator .
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/117#discussion_r820657001" expanded>

Consider shifting all the message constants to Message class
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/118#discussion_r820786246" expanded>

Consider changing the name to something much more descriptive. What kind of delimiter is this? e.g. SUMMARY_STRING_SEPARATOR?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/118#discussion_r820789649" expanded>

Would be good to extract the magic literal 1 here out. See Session class ZERO_INDEXING_OFFSET.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/126#discussion_r821483923" expanded>

Consider renaming this method to make it more self explanatory, e.g. updateCostListWithExtraCharges
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/126#discussion_r821485677" expanded>

Likewise as above, consider renaming the method to be more self explanatory.
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/129#discussion_r821492647" expanded>

Consider adding fallthrough comments here to make it clear that there is a fallthrough.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/155#discussion_r824335270" expanded>

Consider using sessionList.isEmpty() instead
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/155#discussion_r824335387" expanded>

Likewise as above, consider using sessionList.isEmpty() instead
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/173#discussion_r825231934" expanded>

Might want to also assert that personNames is not null, as constructors can also take in null.
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/173#discussion_r825232503" expanded>

Consider renaming it to .._DUPLICATE_EXISTS_BUT_NOT_DETECTED as the current name may imply that the that there's no duplicates if the condition fails.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/173#discussion_r825232867" expanded>

Consider adding a period for standardisation.
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/173#discussion_r825233133" expanded>

Might want to add ACTUAL.TXT to .gitignore as it is regenerated every time the application is run with the test file.
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/179#discussion_r825254434" expanded>

You might have forgotten to update the explanation of activityId, might want to fill it up for clarity.
Consider capitalising all the first letters of each @param annotation's description for standardisation.
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/179#discussion_r825254474" expanded>

Consider capitalising all the first letters of each @param annotation's description for standardisation.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/179#discussion_r825254494" expanded>

Consider capitalising the first letter of @return annotation's description for standardisation.
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/193#discussion_r825304261" expanded>

The keeping track of who has paid and not is not part of v1.0, unless you mean keep track of who paid for what activities? Maybe consider rephrasing in that case to be clearer.
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825552837" expanded>

Consider removing the extra * for standardisation of indentation of the subpoint.
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825553036" expanded>

Consider aligning this portion here as done in the section for activity list for easier readability.
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825553888" expanded>

Consider placing `&gt;br>` behind the text and put text after the `>` symbol, as what others has done so to make it easier to read.
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/206#discussion_r825620356" expanded>

Consider also checking for the class type of command just to be sure that an InvalidCommand object actually got returned and it wasn't that an ActivityCreateCommand object got returned and nothing happened.
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/206#discussion_r825621508" expanded>

This comment applies to all the other tests as well that may return a Command object.
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826564225" expanded>

Should we mention anything about group outing / gathering to align with what a session actually serves to be analogous for? E.g. "A Session represents a gathering of persons in a period of time to participate in activities." or something similar?
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826565169" expanded>

Likewise as above for Session, consider also including what an activity is analogous for rather than describing the data the object holds.
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826565472" expanded>

Consider changing `the activity` to `an activity` to generalise for all activities to be created.
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826565964" expanded>

Should this also mention that the total cost of $10 is split evenly between Alice and Bob?
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826566308" expanded>

Consider mentioning `active activity` or `existing activity` as you have mentioned in the other parts of the document for existing objects for consistency.
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826566955" expanded>

You have changed it to a much cleaner summary, thank you!
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/214#discussion_r826586594" expanded>

Consider removing `individuals` and add a period to standardise with the rest of the points
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/214#discussion_r826587446" expanded>

Consider removing all the `I can` in the last column to follow the column header.
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/214#discussion_r826587646" expanded>

Also might want to decide and standardise whether to capitalise or not under the column "As a ...'
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/214#discussion_r826587912" expanded>

Need to add a whitespace here to allow `Implementation` to behave as a header.
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/216#discussion_r826758218" expanded>

Consider putting messages for Name class separately as with other classes, with its own section and inline comment.
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/218#discussion_r826767680" expanded>

Now that you have added a return type to addCostOwedAndCostPaid() method, you should consider adding a `@return` annotation  for the method as well to describe the return values.
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/218#discussion_r826771249" expanded>

Logic is incorrect here. Say if `personPaid` is in `involvedPersonList` was the first person to be checked, `hasAddedForPersonPaid` is set to true, but on subsequent loops, `hasAddedForPersonPaid` would be set to false, which would cause `personPaid` to have a duplicate `ActivityCost` to be added.
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/227#discussion_r827613624" expanded>

Consider creating a method that lets you get the current "next" `sessionId` instead, may make it more readable and understandable as `getNewSessionId()` actually causes a side effect of incrementing the `sessionId`. That way you also don't have to subtract `testSessionId` by 1.
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/227#discussion_r827614010" expanded>

Same issue as before. consider creating a getter for current "next" `sessionId`, so that it is more readable and `sessionId` is not needlessly incremented.
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/248#discussion_r828213820" expanded>

Consider removing this newline for standardisation (single line breaks only).
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/248#discussion_r828217155" expanded>

Consider rephrasing `sid` to `session unique identifier`.
Also consider splitting this test into two separate tests, one without the delimiter `/sid` (`activity /list 1`), one without the argument after `/sid` (`activity /list /sid`).

</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828722623" expanded>

Consider removing this new line for standardisation.
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828723430" expanded>

Consider leaving only 1 whitespace between person and the description here for standardisation.
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828724077" expanded>

Consider using `Person personInGroup` instead of `Person p` so that the rest of the code in the for loop would have more meaning.
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828724212" expanded>

Consider using `Person personInGroup` instead of `Person p` so that the rest of the code in the for loop would have more meaning.
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828724400" expanded>

Consider changing `Id` to `unique identifier` instead for greater clarity.
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828724778" expanded>

Consider rewording `A list of` to `An ArrayList object containing` to standardise with the rest of the code.
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828725335" expanded>

Did you forget to delete the deleteTarget from the group in this method?
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828770730" expanded>

Consider removing the extra whitespace between `@return` and the description for standardisation.
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828771128" expanded>

Consider rephrasing `a list of` to `an ArrayList object containing` here for standardisation.
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/257#discussion_r828951337" expanded>

Consider renaming this String constant to be more representative of the assert error. Consider naming it `ASSERT_ACTIVITYCREATE_COST_LIST_ARRAY_NULL` or `ASSERT_ACTIVITYCREATE_COST_LIST_ARRAY_NOT_INSTANTIATED`.
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/268#discussion_r829640117" expanded>

Consider putting each separate output condition on a separate line for standardisation, as with other `@return` statements
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/271#discussion_r829702481" expanded>

Remove newline for standardisation
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/271#discussion_r829702628" expanded>

Consider adding a newline between description and the `@throws` annotation.
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/271#discussion_r829703211" expanded>

Consider rewording the description as the current description implies that you are expecting an activity to be created, contrary to the test.
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/271#discussion_r829703399" expanded>

Consider rewording the description as current description implies that you are expecting an increment to the identifier, contrary to the test.
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/276#discussion_r830090717" expanded>

Consider removing these extra new lines here for standardisation.
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/276#discussion_r830091708" expanded>

Consider removing one new line here for standardisation.
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/276#discussion_r830092034" expanded>

Consider removing this newline here for standardisation
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/276#discussion_r830092410" expanded>

Consider removing this newline here for standardisation.
</panel>

<panel  header="**70 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/281#discussion_r830548761" expanded>

Consider correcting `An` to `A` to rectify minor grammar mistake.
</panel>

<panel  header="**71 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/290#discussion_r830633499" expanded>

Minor improvement suggestion: can elaborate on what the group unique identifier does with respect to this class, e.g. group unique identifier for the group to be viewed.
</panel>

<panel  header="**72 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/296#discussion_r831143452" expanded>

This should be removed from the user guide as it is outdated information.
</panel>

<panel  header="**73 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/296#discussion_r831144921" expanded>

Would be good to elaborate what you mean by a `group of friends`.
</panel>

<panel  header="**74 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/301#discussion_r831156830" expanded>

Consider emphasising the fact that this exception does not specifically have a cause, e.g. `withMessageOnly` or `withMessageWithoutCause`
</panel>

<panel  header="**75 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832992202" expanded>

Consider shifting the max comparison between `maxColumnWidth` and `headerLength` to before or after the for loop as you are doing unnecessary work by repeatedly comparing against the same value. Alternatively, you can initialise `maxColumnWidth` as `headerLength` which would do the same thing as well.
</panel>

<panel  header="**76 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832992915" expanded>

Consider renaming `rowItem` as `rowIndex` instead, as `rowItem` seems to suggest the row itself or its contents.
</panel>

<panel  header="**77 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832996148" expanded>

Consider aligning the description after the `@param` annotation.
</panel>

<panel  header="**78 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832997675" expanded>

Consider renaming `rowItem` to `rowItemIndex` to make it clearer that you are referring to the index.
</panel>

<panel  header="**79 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833000183" expanded>

`padding` seems to be a misnomer here, consider changing it to `columnWidth` or something more representative of the variable.
</panel>

<panel  header="**80 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/326#discussion_r833294893" expanded>

Consider rephrasing to say that SplitLah parses the input and obtains a `GroupListCommand` object to help connect point 2 and 3.
</panel>

<panel  header="**81 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833500037" expanded>

As of now, it doesn't appear that the TableFormatter can be updated to add/remove columns so it might be misrepresentative to say that here. Maybe remove columns from the comment.
</panel>

<panel  header="**82 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833501811" expanded>

Consider removing the extra whitespace between `@param` and the description as only annotations of the same type needs to be aligned to each other.
</panel>

<panel  header="**83 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/352#discussion_r835763131" expanded>

Consider using `ui` instead of `System.out.println` for portability and consistency.
</panel>

<panel  header="**84 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/352#discussion_r835763203" expanded>

Consider removing the `ExitCommand` import as it is unnecessary in this class.
</panel>

<panel  header="**85 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/374#discussion_r837558112" expanded>

Consider arranging the imports in alphabetical order instead.
</panel>

<panel  header="**86 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/374#discussion_r837558852" expanded>

Is there a reason you added in this constant here? I don't see it being used anywhere in your code, did you forget to add it in somewhere?
</panel>

<panel  header="**87 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/374#discussion_r837561436" expanded>

Consider phrasing your JavaDoc comments in the following way: `Checks if &gt;expected outcome of test> when &gt;conditions of test>`, would help to understand what is the conditions of the test when the test is run. This comment applies to the other JavaDoc comments as well
</panel>

<panel  header="**88 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r837569678" expanded>

Consider rephrasing it as such for better clarity:
`... from the profile object, Profile#getActivityList is executed, returning a list of Activity objects`
</panel>

<panel  header="**89 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r837571588" expanded>

I think you might have intended to indent this portion so that your list is on a different indentation level as points that come after point 6?
</panel>

<panel  header="**90 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r837574766" expanded>

In this case, if we are using getActivityListSummaryString() from sessionToBePrinted, you do not neeed to have this part here. Session#getActivityLisitSummaryString() performs that check and prints an error message accordingly.
</panel>

<panel  header="**91 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r837578721" expanded>

Might need to rework this part since now we are using Session#getActivityListSummaryString(). I think it's also okay to not go into the details of getActivityListSummaryString() and just say that Session class will return a String containing either an error message if the activity list in the session is empty, or a table summarising the list of activities in the session.
</panel>

<panel  header="**92 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/382#discussion_r838048141" expanded>

Consider omitting the first part where you mention about `[SESSION_ID]` and `[ACTIVITY_ID]` and consolidate below &gt;referring to `Activity Create`) , would help reduce the repetition of information.
</panel>

<panel  header="**93 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r838049889" expanded>

Consider adding a last point to mention that the String returned is then printed out with `TextUI#printlnMessage()`
</panel>

<panel  header="**94 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r838050534" expanded>

Also, consider using either `String object` or `string`, rather than `String` to better clarity.
</panel>

<panel  header="**95 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838206379" expanded>

Consider changing `Splitlah` to `SplitLah` for consistency.
</panel>

<panel  header="**96 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838209800" expanded>

Consider changing both instances of `sessionId` to session unique identifier to standardise with Profile component which uses that terminology.
</panel>

<panel  header="**97 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838210224" expanded>

Likewise here, consider changing `Splitlah` to `SplitLah` for consistency
</panel>

<panel  header="**98 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838212956" expanded>

Numbering used here is a little weird, maybe have it be consecutive for better consistency?

I think you have to change this entire part to reflect changes (right now SessionListCommand is updated to use `Profile#getSessionListSummaryString` instead, maybe reference #375 for ActivityListCommand which uses `Session#getActivityListSummaryString`.
</panel>

<panel  header="**99 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838790637" expanded>

Consider rephrasing "... at a single run ..." to "... in a single run ...".
</panel>

<panel  header="**100 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838792914" expanded>

Consider shifting the comma and using session unique identifier instead of ID:
If the session previously created had Alice and Bob with session unique identifier of 1 and you wish to edit it to include Charlie, a valid edit command would be ...
</panel>

<panel  header="**101 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838795136" expanded>

"Edits the name of the session to ..." would be better to signify what exactly you are editing.
</panel>

<panel  header="**102 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838799743" expanded>

Should this part be included in SessionCreate and SessionEdit as well, especially since names need to be defined there first?
</panel>

<panel  header="**103 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838801763" expanded>

Consider replacing the future tense used here:
However, deleted sessions are not listed.
</panel>

<panel  header="**104 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838802329" expanded>

Consider replacing the future tense used here:
... which is split equally ...
</panel>

<panel  header="**105 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838803375" expanded>

Consider adding a 'the' to be clearer in this sentence:
... so that you can change the details ...
</panel>

<panel  header="**106 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838804779" expanded>

Would using "within" or "in" instead of "part of" be better here?
</panel>

<panel  header="**107 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838805176" expanded>

Also, consider using present tense here:
The activity is named *Lunch*...
</panel>

<panel  header="**108 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838805936" expanded>

Consider replacing the future tense used here with present tense:
... deleted activities are not listed.
</panel>

<panel  header="**109 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838807943" expanded>

Also consider rephrasing the latter part
... particulars for every session that is participated by the same group of persons.
</panel>

<panel  header="**110 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838808734" expanded>

Consider rephrasing "do not need" to "no longer need".
</panel>

<panel  header="**111 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838811868" expanded>

Consider including the portion regarding how at least one field has to be included in order for the command to run, and how both fields can be edited at the same time, similar to `Session /edit`.
</panel>

<panel  header="**112 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838812465" expanded>

Consider using present tense instead of future tense for standardisation:
However, deleted groups are not listed.
</panel>

<panel  header="**113 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838816859" expanded>

Consider omitting "starts to" for better clarity:
Once the command runs,

</panel>

<panel  header="**114 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838817959" expanded>

Also, I think it should be `SessionCreateCommand` object here. Alternatively, "the `SessionCreateCommand#run` method checks ..."
</panel>

<panel  header="**115 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838819576" expanded>

Please split this part up, `Manager#getProfile#addSession` is invalid syntax, consider changing it to two parts:
..., hence `Manager#getProfile` is called to obtain the `Profile` object, which is used to call the `Profile#addSession` method in order to store the new `Session` object ...
</panel>

<panel  header="**116 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838821462" expanded>

Slightly misleading to say this as a `String` object should not be returned by the `Profile#getSession` method. Perhaps simply say that `an exception is thrown with an error message`.
</panel>

<panel  header="**117 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838821981" expanded>

Perhaps can mention how is it removed, e.g. using `Profile#removeSession` method or something along those lines.
</panel>

<panel  header="**118 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840246160" expanded>

Consider rephrasing as such
"This guide's purpose is to explain the internal workings of SplitLah, so that future engineers can understand the application's implementation in detail and continue working on the project with ease."
</panel>

<panel  header="**119 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840246969" expanded>

Consider changing "eight" to "six" to match the components. Also might want to consider the fact that "SplitLah" itself has a component of its own, and if included, there should be "seven" components.
</panel>

<panel  header="**120 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840249823" expanded>

Consider showing how the API reference link is formatted, e.g.
contains an API reference link encased in a `code block` that ...
</panel>

<panel  header="**121 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840253555" expanded>

Did you forget something here?
</panel>

<panel  header="**122 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840254312" expanded>

Consider using "save file" instead of "data file" here for consistency.

Do we want to explain what happens when a save file is not created?
</panel>

<panel  header="**123 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840255520" expanded>

Consider linking back to why you mentioned that `Profile` component implement `Serializable` class,
"... to write **all the data stored in the `Profile` component** into the save..."
</panel>

<panel  header="**124 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840257198" expanded>

Might want to use a `&gt;br>` at the back of 6 and indent the image reference to let the image load correctly, or the image might load to the right of the text.
</panel>

<panel  header="**125 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840257616" expanded>

What happens if it returns false? 
</panel>

<panel  header="**126 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840258083" expanded>

Consider rephrasing this to 
If ...,  `Session#someMethod` is called to set ...
</panel>

<panel  header="**127 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840571868" expanded>

Please correct the grammar used here: encased* in a `code block`..
</panel>

<panel  header="**128 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/397#discussion_r840581608" expanded>

Did you forget something here?
</panel>

<panel  header="**129 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/397#discussion_r840583501" expanded>

Consider adding a 'then' into the sentence to link the flow from point 10 to point 11.
</panel>

<panel  header="**130 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/397#discussion_r840585638" expanded>

I think you forgot something here.
</panel>

<panel  header="**131 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/429#discussion_r841046416" expanded>

Consider rephrasing "bugs" to "inconsistencies to activities in the session" 
</panel>

<panel  header="**132 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/428#discussion_r841075290" expanded>

Consider removing these unnecessary new lines for standardisation.
</panel>

<panel  header="**133 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/428#discussion_r841075300" expanded>

Consider removing one extra new line for standardisation
</panel>

<panel  header="**134 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/428#discussion_r841075451" expanded>

You can omit one check here (`newPersonList.isSuperset(session.getPersonArrayList())` returns true at this line) as you have already performed that check earlier.
</panel>

<panel  header="**135 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/428#discussion_r841076428" expanded>

I think something is wrong with this sentence, might need to rephrase here.
</panel>

<panel  header="**136 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841164221" expanded>

Should this member attribute be kept with the other member attributes?
</panel>

<panel  header="**137 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841166798" expanded>

Is this logic correct? Correct me if I am wrong but:
`involvedList != MISSING_INVOLVEDLIST` : true if involved list exists
`costList == MISSING_COSTLIST` : true if costList does not exist

If condition is true if: 
Missing total cost && Involved list exist && costList does not exist OR
Missing total cost && Involved list does not exist && costList exist..?

And with that you throw exceptions on the following cases in this method:
1. Missing total cost && Involved list exist && costList does not exist
2. Missing total cost && Involved list does not exist && costList exist
3. Involved list exists && costList exists && list length mismatch
4. Involved list exists && list has name duplicates.

After `retrieveDetailsFromOldActivity` is calleld, involvedList should not be missing, and as such you might need to reconsider all these if conditions.
</panel>

<panel  header="**138 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841167306" expanded>

Would there be a need for this -- is there a case where the number could be &gt; 0?
</panel>

<panel  header="**139 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841167692" expanded>

Not a problem point if it is accounted for, just check that there is no situation where any of the methods following this one will throw an exception, because SessionSummary will display and use the dummy activity cost if not dealt with, assuming the activityCostId does not get updated later on and the old activity does not get deleted etc.
</panel>

<panel  header="**140 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841168457" expanded>

Please standardise this part to something like the following:
```
Return A double that represents a GST charge in percents if the GST delimiter is found,
       a double value of -1 otherwise.
```
Likewise for the other new method created.
</panel>

<panel  header="**141 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841168688" expanded>

You can simplify this to
```
if(!equals) {
    throw new ..
}
```
Likewise for parsePayer, parseInvolved etc.
</panel>

<panel  header="**142 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841169092" expanded>

Why is this method throwing InvalidDataException? 
Additionally, no tests are being done with regards to the run command in this JUnit test.
Consider shifting this type of tests to ActivityEditCommandParserTest instead, as parsing tests are more relevant there.
</panel>

<panel  header="**143 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841169223" expanded>

Command#run is not being called here, and as such, costList will not be edited at all, not because of the command running but rather command not running.
Please check through all your tests to ensure that for JUnit tests that tests the run command, you should actually call the run command and check the side effects of the run command.
</panel>

<panel  header="**144 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/453#discussion_r842581709" expanded>

Consider aligning the descriptions for both `@param` tags here for standardisation
</panel>

<panel  header="**145 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/452#discussion_r844916290" expanded>

Might want to also add that the second sentence applies only where TOTAL_COST is not provided, otherwise sentence can be misleading. Likewise for cost list below.

Alternatively, maybe indent one further under the first sentence, then put the last sentence on a separate point
</panel>

<panel  header="**146 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846646448" expanded>

Consider keeping the word then to maintain the flow of the discussion.
</panel>

<panel  header="**147 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846646502" expanded>

Maybe "Parsing of commands" instead would be more representative.
</panel>

<panel  header="**148 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846646570" expanded>

Consider correcting the grammatical error here: It should be "invokes ... and retrieves ...".
</panel>

<panel  header="**149 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846646769" expanded>

This change is a little weird, consider rephrasing for better flow. What is referred to by "which"?
</panel>

<panel  header="**150 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846646828" expanded>

Consider correcting the case used to lower case for "The".
</panel>

<panel  header="**151 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846647284" expanded>

Consider removing "instead" if you were to shift the previous clause down.
</panel>

<panel  header="**152 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846646291" expanded>

"to parse ... and return", nothing wrong here, should not be edited.
"to parse ... and returns" is grammatically wrong.
</panel>

<panel  header="**153 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/492#discussion_r846977268" expanded>

Consider adding "is called to check all details"... to the first sentence.

</panel>

<panel  header="**154 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/492#discussion_r846977805" expanded>

Is this import necessary?
</panel>

<panel  header="**155 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/37#discussion_r819282898" expanded>

Added newline in next commit.
</panel>

<panel  header="**156 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/215#issuecomment-1067864087" expanded>

Latter resolved by #218
</panel>

<panel  header="**157 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/9#issuecomment-1067928945" expanded>

Closed by #221 
</panel>

<panel  header="**158 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/442#issuecomment-1088230872" expanded>

@slewyh 
Thank you for your review.

With regards to part 1, I am explaining in the comments **what** the command arguments should be, they should be delimited by the delimiter. E.g. an expected input should be something that contains `/sid 4`, a string that contains both the delimiter `/sid` and the argument `4` itself from the user input.
I'm not sure where I may have actually explained **how** the code works at all, maybe it would be really great if you could clarify this.

With regards to part 2, I agree with that point and I will work on that part.
</panel>

</panel>


<panel type="info" header="### 2. MUSF..AHIM `@Musfirahe0556596` (112 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/15#discussion_r819567574" expanded>

Perhaps can add throw IOException?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/15#discussion_r819568528" expanded>

Perhaps a suggested method name could be printExerciseList()
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/15#discussion_r819569380" expanded>

Just a minor formatting issue - add a white space after IndexOutOfBoundsException and the curly bracket { !
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820124454" expanded>

A minor formatting issue - remove the space in between InvalidCommandException and the bracket ( 
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820129661" expanded>

Just a suggestion, if it would be better to rename createWorkout to createAndAddWorkout. Otherwise, it's good :)!
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820515981" expanded>

Minor formatting issue - place space between ) and {
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820516236" expanded>

Minor formatting issue - place space between ) and {.

Also might want to consider using constants instead of the number 10.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820517479" expanded>

Minor formatting issue - place space between ) and {.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820517686" expanded>

Minor formatting issue - place space between ) and {.


</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820517999" expanded>

Minor formatting issue - place space between ) and {.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823384856" expanded>

For standardization with the rest of the switch code:

Workout deleteWorkout = getWorkoutList().deleteWorkout(getUserArguments());
getUI().printDeleteWorkoutMessage(deletedWorkout);
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823386139" expanded>

Just a suggestion, might want to rename exercises to exercisesList perhaps.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823390372" expanded>

Minor formatting issue - just remove space!
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823396034" expanded>

Might want to rename this method precisely because from what I see is that this method more of like add the workout into a file? so maybe appendAndConvertWorkoutToFileDataFormat()?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823483278" expanded>

I see! Thank you for the clarification :) 
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/46#discussion_r825280373" expanded>

Loved that follow up action is added! Just a minor minor formatting issue - add a space in between "again." and "Alternatively"! 👍 
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/46#discussion_r825280476" expanded>

Loved how this is generalized for both update and delete function! Thank you :)!
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/45#discussion_r825281877" expanded>

Download instead of "Down"?
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/45#discussion_r825282240" expanded>

Remember to remove template
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/48#discussion_r825434618" expanded>

In the situation of real app implementation, there will be more exercises in the file so this assertion might constantly change (understandable that assertion can be disabled too). Some suggestions perhaps:
1. Use constant variable instead of magical numbers.
2. Make use of .size() instead?
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/71#discussion_r827008712" expanded>

Perhaps variable name could be "isExistingWorkout"?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/74#discussion_r827885515" expanded>

Minor language issue - "The index of workout to be updated..."
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/95#discussion_r829678546" expanded>

On second thoughts, I think this should be called "workoutToUpdate" instead of updatedWorkout because here, the workout value is not yet updated.
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830446384" expanded>

Is the word "update" in "update search exercise" supposed to be there? 
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830446715" expanded>

Comment to remove?
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830446761" expanded>

Just wondering if we using .toLowercase()!
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830479037" expanded>

Then this could be extracted to a method called findMatchExercise()
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830478983" expanded>

Perhaps method name could be changed to searchExercise()
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/100#discussion_r830553871" expanded>

I think the parameter name "exercise" should be changed as this method is more generalized now?
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/100#discussion_r830553926" expanded>

Just wondering, are these variables used anywhere?
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/101#discussion_r830624886" expanded>

Typo on help
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831273259" expanded>

Make 7 a constant variable instead of a magical number!
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831281111" expanded>

is schedulePrintList being used anywhere?
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831284997" expanded>

Perhaps is it possible to use just the dayList list instead of having a scheduleList list as the dayList list stores Day objects, which, in turn stores a Plan object (consisting of the name of the plan)?
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831287901" expanded>

"Please specify a valid plan number" perhaps?
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/113#discussion_r832833988" expanded>

is this supposed to be getPlansHashMapList() as I notice only the plan gets removed from the plans list (display list), not the hashmap? 
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/121#discussion_r833298924" expanded>

Love the summary! Might want to consider everyone to follow this writing format!
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833391822" expanded>

a very minor formatting issue: extra whitespace on second line
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833394502" expanded>

Nice use of "no magic literals"! :)
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/125#discussion_r833471902" expanded>

Perhaps could explain a bit further on this JavaDoc. E.g. prints workout in 20 workouts per page.
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/125#discussion_r833481672" expanded>

my bad for the misunderstanding. the issue is solved, thank you!
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/129#discussion_r834114331" expanded>

Nice job separating and generalizing the methods!
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/129#discussion_r834118880" expanded>

don't forget to add in the plan /details to view a plan in more details once implemented !
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/130#discussion_r834141689" expanded>

is search /all inside?
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/136#discussion_r834676447" expanded>

Line 392, minor language issue!
Perhaps can try "This method will further evaluate the workout action, ........"
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/136#discussion_r834677911" expanded>

Line 400, 401 minor language issue!: 
Perhaps can try "...and is within the range of the workout list. It also checks whether the workout to update exists in the current workout list."
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/136#discussion_r834679035" expanded>

Think the format is supposed to include the `&gt;index of workout> &gt;new number of repetitions>`  too?
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/136#discussion_r834679848" expanded>

Nice job of changing parameter name!~
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/141#discussion_r835874612" expanded>

Great process of considering index will be moved up once a plan is deleted!
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835874947" expanded>

minor language issue! - "store them in the application"
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835875039" expanded>

Perhaps - An exercise with a quantity/number of repetitions?
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835875117" expanded>

Minor punctuation issue! Perhaps remove the comma near "named" and "Arms"?
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835875439" expanded>

This is great to have! However, one consideration is, perhaps in the user's point of view, will they understand this?
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835875684" expanded>

Thank you for updating the command summary &hat;_&hat;
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835874881" expanded>

Are we still including e.g. "In addition, provides a pre populated workout for beginners" ? (another target user)
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835893100" expanded>

personally i agree with this!
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835893230" expanded>

perhaps for our future enhancement :P but yes i guess our UG will be for the current features we have! thanks!
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835893341" expanded>

maybe we can discuss with the team later?
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/145#discussion_r835925580" expanded>

or "can simply delete the files/folder in the worst scenario"?
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/146#discussion_r835956570" expanded>

nice linking :)!
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/146#discussion_r835956667" expanded>

Perhaps could add a short explanation on the expected outcome. E.g. "All workouts in the Grow My Muscles plan will be displayed....."
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/155#discussion_r836557138" expanded>

Line 162, first sentence: Is the "user's command." supposed to be there xD? 
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/157#discussion_r836604882" expanded>

thank you for removing the redundant throw! &hat;_&hat;~
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/157#discussion_r836608646" expanded>

thank you for changing this!
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/174#discussion_r839149329" expanded>

Nicely done but perhaps a consideration is we might want to number our FAQ so its easier for users to find a question based on its question number instead of finding based on title. So e.g. _1. My terminal in Windows..._ In the long run, if we have a longer FAQ, finding this question without the question number might be difficult.
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/172#discussion_r839152723" expanded>

nicely called out the function for delete Plan &hat;_&hat;
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/172#discussion_r839154218" expanded>

based on my previous review, here's the commented code!
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/172#discussion_r839153949" expanded>

hmm is there a rationale to why the UI call and the deleteplancontainsdeletedworkout method is here instead of at the WorkoutCommand? (the commented code)
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/216#discussion_r840820030" expanded>

For the uml diagrams, might want to consider simplifying your diagram by removing steps 1 to 4 (e.g. from getuserinput till the return Command.) Possibly standardize to the SD like the screenshot below as the reference frame will be used to reference a sequence diagram (not yet created) on a section called _Parsing User Input and Getting the Right Command_.

![image](https://user-images.githubusercontent.com/69451253/161319968-00628ff3-c259-42eb-91d1-bc7ddaadc46f.png)


</panel>

<panel  header="**70 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/172#discussion_r840831835" expanded>

hmm because i think it would be more consistent if everything is in the WorkCommand.java instead of putting ui printing and deleteplancontainsworkout methods in the same method as the deleteWorkout...
</panel>

<panel  header="**71 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r840997405" expanded>

good use of instanceof!
</panel>

<panel  header="**72 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841039497" expanded>

Not sure if we should include the `execute()` method here as the other diagrams include this method too. It would look like it was called two times in a SD diagram.
</panel>

<panel  header="**73 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841040002" expanded>

Perhaps before the diagram is shown, can say something like "Below is a SD and explanation of how the ....... works"
</panel>

<panel  header="**74 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841040364" expanded>

It is unclear what _(see example)_ is referring to as of now or is this to be updated?
</panel>

<panel  header="**75 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841040868" expanded>

Great inclusion of this note! :)
</panel>

<panel  header="**76 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841040953" expanded>

Line 275: Typo on the word "Characters"
</panel>

<panel  header="**77 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841041099" expanded>

This is a very good table and explanation. A further suggestion is perhaps can say "However, even if those characters are entered, the app has taken measures to handle these inputs ..."
</panel>

<panel  header="**78 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841039359" expanded>

just wondering if activation bars are supposed to be present as they are methods called within the Parser class itself.
</panel>

<panel  header="**79 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841040098" expanded>

Minor language issue on Line 229: Perhaps "...._as a `String` and call the `String#trim()` method to remove......_"
</panel>

<panel  header="**80 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/223#discussion_r841096007" expanded>

Might want to change the name of the text in between [ ] !
</panel>

<panel  header="**81 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/223#discussion_r841096066" expanded>

Line 527: Is this supposed to be `updateWorkout()?` instead xD
</panel>

<panel  header="**82 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/225#discussion_r841097418" expanded>

I think this question is great but first time users might not know that this app has colours. Hence might change to a more suitable question like "My terminal is showing some weird symbols [paste a screenshot of the fail colour render]"
</panel>

<panel  header="**83 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/225#discussion_r841097492" expanded>

oo why is this link here :O?
</panel>

<panel  header="**84 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/225#discussion_r841101733" expanded>

thank you for the clarification!
</panel>

<panel  header="**85 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841215323" expanded>

Line 27: is this supposed to be the correct link? it seems to link to the ppp folder for me?
</panel>

<panel  header="**86 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841215699" expanded>

Typo on `InvalidExerciseException`
</panel>

<panel  header="**87 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841215844" expanded>

is this supposed to be an image?
</panel>

<panel  header="**88 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841216009" expanded>

does setting up meeting and attending meeting counts? x)
</panel>

<panel  header="**89 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841216117" expanded>

Line 88: typo on "but _not_ limited to"
</panel>

<panel  header="**90 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841216157" expanded>

felt like you reviewed more hmmm... perhaps you can't find or still editing x)
</panel>

<panel  header="**91 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/231#discussion_r841259983" expanded>

Line 128: remove this letter?
</panel>

<panel  header="**92 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/231#discussion_r841260470" expanded>

Not sure how the github pages looks like but here is the current view of the md file in github at my side:
![image](https://user-images.githubusercontent.com/69451253/161442823-466021b6-0d2b-4476-84eb-7634c9a00174.png)

it seems like the white spaces are trimmed?
</panel>

<panel  header="**93 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/232#discussion_r841261102" expanded>

Line 1153: perhaps can provide link to User Guide.
</panel>

<panel  header="**94 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841267252" expanded>

Perhaps diagram might need `ExerciseList.java` class also to show the actions `Exercises` can do. Otherwise, the rest of the diagram looks good!
</panel>

<panel  header="**95 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841267643" expanded>

It's great to include this but not sure if necessary to include. would need input from others to see if we need this part (because future iteration is a bit questionable xD)!
</panel>

<panel  header="**96 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841267725" expanded>

Line 118: if we agree to include Lines 134 to 137, this format can be kept! Else, can just remove `&gt;keywords>`
</panel>

<panel  header="**97 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841267804" expanded>

Line 131: is `SearchCommand` supposed to be there?
</panel>

<panel  header="**98 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841311901" expanded>

I see.. Thanks!
</panel>

<panel  header="**99 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841312356" expanded>

very nice!
</panel>

<panel  header="**100 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841313437" expanded>

Line 131: "by passing relevant parameters _related to the constructor_" perhaps? (removed search to)
</panel>

<panel  header="**101 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/231#discussion_r841317507" expanded>

good examples!
</panel>

<panel  header="**102 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/237#discussion_r841363062" expanded>

Perhaps a better method name is clearDay()? because clear day means clear the plan?
</panel>

<panel  header="**103 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/237#discussion_r841363365" expanded>

Line 176: perhaps a suggestion: "No plan is scheduled hence there is nothing to clear"
</panel>

<panel  header="**104 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/253#discussion_r843355840" expanded>

just wondering, is there a reason why the 2nd parameter is added? I feel like the toString method on updatedWorkout can be called in their respective methods x)?
</panel>

<panel  header="**105 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/254#discussion_r843396559" expanded>

Line 134: Upon the _initialization_ of `WerkIt`, the `UI` class will call the `printGreetings()` method.....
</panel>

<panel  header="**106 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/254#discussion_r843397876" expanded>

Line 137: [space] `printFileLoadStatusMessage()` [space] methods
</panel>

<panel  header="**107 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/254#discussion_r843398943" expanded>

Line 138: The `UI` component/class is also responsible.........
Line 139: method, (put a comma) which will then _parse the input by sending it to the `Parser` class, which will process the input and call other relevant methods to execute the command._
</panel>

<panel  header="**108 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/254#discussion_r843399349" expanded>

Line 146: the `printGoodBye()` method will be called to _indicate that the user has successfully exited the program_ perhaps?
</panel>

<panel  header="**109 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/254#discussion_r843399929" expanded>

Line 238: lowercase _the_ before the `UI#getUserInput()`
</panel>

<panel  header="**110 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/254#discussion_r843400052" expanded>

Perhaps schedule can be in markdown so like `schedule`
</panel>

<panel  header="**111 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/250#discussion_r843487599" expanded>

Changed naming of Command --> Logic component x)
</panel>

<panel  header="**112 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/306#discussion_r846643281" expanded>

is this going to be changed too?
</panel>

<panel  header="**113 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/22#discussion_r822597172" expanded>

Yep, it's meant to be removed before merging the PRs! Just placed there for justification on why I did the following code. Thanks!
</panel>

<panel  header="**114 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830453958" expanded>

thank you!
</panel>

<panel  header="**115 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830454130" expanded>

added!
</panel>

<panel  header="**116 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/118#discussion_r833042411" expanded>

Thank you! props to Alan &hat;_&hat;!
</panel>

<panel  header="**117 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/126#discussion_r833538208" expanded>

Thank you &hat;_&hat;~
</panel>

<panel  header="**118 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/134#discussion_r834338913" expanded>

thank you &hat;_&hat;
</panel>

<panel  header="**119 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/134#discussion_r834346828" expanded>

yep thanks for noticing this &hat;_&hat;!
</panel>

<panel  header="**120 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/138#discussion_r835111614" expanded>

oh yes thank you for this!
</panel>

<panel  header="**121 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/164#discussion_r838075474" expanded>

Thanks, sounds nicer &hat;_&hat;!
</panel>

<panel  header="**122 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/15#issuecomment-1059691975" expanded>

Fixes #7 
</panel>

<panel  header="**123 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/22#issuecomment-1063037811" expanded>

Fixes #9 
</panel>

<panel  header="**124 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/39#issuecomment-1064845903" expanded>

PR https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/42 has some JUnit tests for delete workout function in WorkoutList.java
</panel>

<panel  header="**125 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/39#issuecomment-1066417847" expanded>

PR https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/51 has some JUnit tests for update workout function in WorkoutList.java
</panel>

<panel  header="**126 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1069008388" expanded>

PR https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/74 has documentation for the update workout function
</panel>

<panel  header="**127 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/91#issuecomment-1072948829" expanded>

Unique IDs for Plan objects have been implemented in PR #97 
</panel>

<panel  header="**128 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#issuecomment-1072952601" expanded>

> Good and quick implementation of Creating Plan feature! Thank you and your hard work will be remembered!

Thank you :D!
</panel>

<panel  header="**129 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/81#issuecomment-1072996726" expanded>

#99 implements `plan /list` , whereby users are able to see all plan names in a plan list (not the details like workouts in a plan).
</panel>

<panel  header="**130 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/99#issuecomment-1073034408" expanded>

This PR also addresses #81 
</panel>

<panel  header="**131 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/103#issuecomment-1073297898" expanded>

#102 have JUnit test cases for the create and list plan.
</panel>

<panel  header="**132 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/103#issuecomment-1073968512" expanded>

#104 have JUnit test cases for searching for plans and exercise.
</panel>

<panel  header="**133 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1076685900" expanded>

PR #128 has documentation for create plan and list plans.
</panel>

<panel  header="**134 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/137#issuecomment-1077872744" expanded>

> GOOD!!!!!

THANK YOU!!! &hat;_&hat;
</panel>

<panel  header="**135 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/103#issuecomment-1080780241" expanded>

#154 have additional JUnit test cases for the create plan method.
</panel>

<panel  header="**136 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/103#issuecomment-1080848200" expanded>

#157 have JUnit test cases for plan details and plan delete.
</panel>

<panel  header="**137 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/169#issuecomment-1083396169" expanded>

For reference that it works (the Windows Terminal app download):

![image](https://user-images.githubusercontent.com/69451253/160891806-b66067f7-a50a-49e8-8e47-6550f24d396e.png)

</panel>

<panel  header="**138 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/170#issuecomment-1084061536" expanded>

#172  has part of this bug fix. Here, upon deleting a workout, the deleteWorkout will cascade to delete plans which has that workout - aka by calling deletePlan.
</panel>

<panel  header="**139 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/222#issuecomment-1086594221" expanded>

Fix for #192 
</panel>

<panel  header="**140 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/205#issuecomment-1086697734" expanded>

#223 fixes this
</panel>

<panel  header="**141 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/223#issuecomment-1086697853" expanded>

Fixes #205 
</panel>

<panel  header="**142 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1086859793" expanded>

PR #221 adds improvements to the UG based on peer feedbacks
</panel>

<panel  header="**143 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1086860035" expanded>

PR #225 adds instructions on Windows Terminal for displaying colours in the application
</panel>

<panel  header="**144 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/207#issuecomment-1086884007" expanded>

Bug report is ambiguous and not explained properly. Won't fix.
</panel>

<panel  header="**145 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/204#issuecomment-1086884675" expanded>

#223 has changed this diagram into a sequence diagram.
</panel>

<panel  header="**146 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/195#issuecomment-1086885836" expanded>

Fixed in #215 
</panel>

<panel  header="**147 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/193#issuecomment-1086886297" expanded>

Won't fix.
</panel>

<panel  header="**148 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/189#issuecomment-1086886532" expanded>

Fixed in a PR.
</panel>

<panel  header="**149 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/182#issuecomment-1086887362" expanded>

WerkIt's design choice.
</panel>

<panel  header="**150 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/213#issuecomment-1086887854" expanded>

Explained in UG. Adding an introduction to UI may make it too cluttered.
</panel>

<panel  header="**151 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/208#issuecomment-1086888564" expanded>

Fixed in #218 
</panel>

<panel  header="**152 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/206#issuecomment-1086896254" expanded>

Additionally, add in DG for design consideration.
Fixed in #218. By design, we delete inconsistent plan names between schedules and plans.
</panel>

<panel  header="**153 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/201#issuecomment-1086900816" expanded>

Won't fix.
</panel>

<panel  header="**154 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/198#issuecomment-1086900987" expanded>

Won't fix.
</panel>

<panel  header="**155 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/196#issuecomment-1086901381" expanded>

Fixed in #225 , stated in UG that users should install Windows Terminal if they want colours to be displayed. 
</panel>

<panel  header="**156 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/191#issuecomment-1086904193" expanded>

Fixed in #222 .
</panel>

<panel  header="**157 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/187#issuecomment-1086904394" expanded>

Fixed in #225 , stated in UG that users should use Windows Terminal for colours to be displayed.
</panel>

<panel  header="**158 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/206#issuecomment-1089221675" expanded>

Fixed in PR #248 . All the local upper cases will be converted to lower cases upon loading of data.
</panel>

<panel  header="**159 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/103#issuecomment-1089222809" expanded>

#251 has Junit test cases for WorkoutCommand and PlanCommand
</panel>

<panel  header="**160 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/286#issuecomment-1091675356" expanded>

#285 contains instructions for manual testing for:
- Launching and shutdown of app
- Deleting a workout
- Creating a plan
- Listing plans (`plan /list`).
</panel>

<panel  header="**161 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/292#issuecomment-1093302934" expanded>

Fixed in #293 - Rename constants to maintain code quality in PlanCommand.java
</panel>

<panel  header="**162 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/286#issuecomment-1094072106" expanded>

#296 contains the write up for:
1. Listing all workouts
2. Schedule related features
</panel>

<panel  header="**163 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/286#issuecomment-1094072547" expanded>

#301 contains the write up for:
1. Updating workout
2. Listing workouts `plan /details`
3. Deleting an existing plan
</panel>

</panel>


<panel type="info" header="### 3. THA .. LIM `@jltha` (95 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/31#discussion_r824409268" expanded>

maybe can write
```
if (filteredDailyTasks.size() > 0)
```
instead of the one you wrote for better semantics, since this if statement also checks out if size is a neg value
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825338662" expanded>

Once you've finalised the logic of your code, try refactoring out more code to avoid an arrow-style code.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825340344" expanded>

Maybe can rename the class to TimerConstant or TimerMessage for better clarity.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825340579" expanded>

This can be extracted into a separate public method in SherpassTimer Class, something like SherpassTimer.reset().
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825340746" expanded>

Same issue for this, can extract out.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825340885" expanded>

Same situation as described above.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825341109" expanded>

I'm thinking that this entire message that is supposed to be printed can be extracted and pasted in your Timer class, the one where you stored the messages for timer methods. Helps reduce the LoC in this method. This message will then be substituted as a constant in this method.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825341281" expanded>

Ohh? Is this a new default timer mode?
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825407679" expanded>

Since we're only handling one Task, I think just having the Task Class is sufficient, no need another child class.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825407836" expanded>

To add newline, if not this will continue to flag out.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825408836" expanded>

Avoid a nested if-else statement whenever possible. You can extract out the code or restructure the code logic.
E.g. After checking for condition in line 125, you don't need to add a else statement since you are returning a new AddCommand().
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825409494" expanded>

Same issue as explained above in line 125. Since there's no time in a task, you only need to check if can parse and then return localDate.format(DateTimeFormatter.ofPattern(DATE_FORMAT_WITHOUT_TIME)); 

Also, in the original iP code, this method checks if the time input is valid, before checking for valid date format in checkCorrectDateFormat(). If we don't intend to add a time, you can remove this and use the checkCorrectDateFormat method.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825409860" expanded>

Same issue as explain in the previous commit. You can use e.g.

```
If (condition1) {
    return variable1;
}

if (condition2) {
    return variable2;
}

return variable3;
```

Having the else statements is unnecessary since you are returning an output. 
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825338802" expanded>

Try abstracting this method (Timer.run()) into smaller methods to improve code quality.
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825340859" expanded>

Same issue here as described previously. Reason being that the purpose of parseStudyMode is simply to parse and select the Mode that the user has chosen, other logic handling will be taken care off by possibly other classes like SherpassTimer.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825418648" expanded>

perhaps can just stick to InvalidInputException, since it also falls under this category of wrong input format/incorrect input content
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825418921" expanded>

Will need to change code structure, some parts are duplicate and need not be repeated
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825643254" expanded>

In that case, maybe can just use /custom instead of a default timer, since the implementation is still the same.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825645843" expanded>

no need add this here, can throw InterruptedException in the method name.
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825646759" expanded>

perhaps can extract this out to comply with SLAP.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825646923" expanded>

May I know what this line does?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825649403" expanded>

Should it be `TimerLogic.StartTimer` instead? Same for the methods that are called in parseTimerInput.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825653147" expanded>

maybe original condition can be 'if (timeLeft > ONE_MINUTE && timeLeft % ONE_MINUTE == 0)
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825653426" expanded>

Then just before this statement, you can return the function, so no need the else.
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825655976" expanded>

can add a return after leaveStudyMode(), here, then afterwards you just need to add a `if(userInput.contains("start") && !isTimerRunning)`
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825656866" expanded>

So theoretically speaking there should be no else if you use guard clause.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825658914" expanded>

Is this method part of the Thread class? 
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825648806" expanded>

For lines 16 to 22, I think you can extract the message out and replace it with a constant. Then you can extract those and paste it inside the timerLogic.enterStudyMode() method.
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825659618" expanded>

line 45, for timerLeft = -1, if not maybe can use extract and replace with smt like reset();?
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825661083" expanded>

Can add to timerLogic.leaveStudyMode();
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825664784" expanded>

can rename to resume
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825665267" expanded>

can rename to `pause`. It'll be confusing since there's another method with the same name.
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825666865" expanded>

Over here can put the printing of leaveStudyMode message which was in execute method of StudyCommand.
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825670462" expanded>

ok will take a look. I probably missed it while reading the changes.
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825673765" expanded>

You can ignore the first point, its just a style preference, yours is much clearer.

For the second point, I meant that that is no need to have this method since there was already checkCorrectDateFormat method in it. They both work the same way. If you want to, u can delete checkCorrectDateFormat method and replaceline 213 with 

```
if (isParseSaveFile) {
                throw new InvalidInputException();
            }
            return confirmInvalidDateFormat();
```

But I think we'll put this on hold for now. Let's decide in the team meeting later on the usage of time along with date, since we have a /do command, maybe user wants to be reminded to do the item when it is a specific time or smt.
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825676916" expanded>

Dont need this, just need to check if input is empty or not, cuz when u have "" as a taskNumber and u access that array index, it'll throw a ArrayOutOfBounds Exception. Also do add a NumberFormatException in case user does smt like edit &gt;some_task> &gt;task_num_1> &gt;task_num_2>.
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825679099" expanded>

I meant that duplicates are not needed, e.g. I see a lot of parsedRemindDateToEdit = EMPTY_STRING and parsedDateToEdit = EMPTY_STRING

Also, when I said change code structure, I also meant using more guard clause, e.g.

```
if (condition) {
    return;
}
```

To avoid nesting and unnecessary if else.
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825664104" expanded>

Can use TimerLogic.startTimer(parsedInput) instead of importing the public methods one by one. Then just import TimerLogic Class.
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825668845" expanded>

Is this the same as pausing the timer? If so, do you want to call pauseTimer() method here?
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825656682" expanded>

same situation as described above to minimise too many usages of if else and use more guard clauses.
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825885462" expanded>

good to rename method name to `isValidDuration()`
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826825438" expanded>

maybe can rename to taskToStore for greater clarity
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826826569" expanded>

Is 4 a magic literal? If so, then will need to add a constant to replace it.
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826832410" expanded>

Would you want to add the case to check for response.equalsIgnoreCase("Yes") and response.equalsIgnoreCase("No")? Just something you can consider since I've previously done this in other methods.
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826833696" expanded>

Can add a .trim() over here, i.e. `response = ui.readCommand().trim()`. This removes any whitespace which can cause a bug in the detection of user input.
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826841894" expanded>

Maybe replace with something like 

'''
if (currentDate == null) {
    return false;
}
return currentDate.isEqual(compareDate);
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826842368" expanded>

Same for this to avoid the unnecessary else
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826840703" expanded>

Something I missed in Braden's pr, line 185 needs a constant to replace the magic literal '0', maybe @BradenTeo can add in on what constant name should be there.
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826890571" expanded>

Good point there, I think I'll implement this in the next iteration as an enhancement after we've confirmed w the rest
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826891272" expanded>

yeap no worries on that, just need to let the OP decide 
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826889582" expanded>

`task`, since from what I've read in the code, `t` is the task you obtain from the current `taskList` and you wish to save it in a JSON file. Any name is fine as long as it increases clarity behind the variables and why they are used.
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/43#discussion_r827800683" expanded>

can replace with ui.showToUser(). Eventually, we would want to replace all souts with the ui method.
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/43#discussion_r827803244" expanded>

Perhaps can place this check within Parser.parseSavedData, and throw new InputRepeatedException if isDuplicateTask() returns true.
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/44#discussion_r828012935" expanded>

Just an example of code readability,

```
if (task.getByDate == null) {
    return;
}
if (task.getDoOnDate == null) {
    return;
}
if (task.getByDate().isEqual(todayDate) || task.getDoOnDate().isEqual(todayDate)) {
    filteredDailyTasks.add(task)
}
```
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/45#discussion_r828071994" expanded>

Remember to add newline next time
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831145246" expanded>

Maybe capitalise the 'a' in 'addrecurring' , since each command starts off as such "Addrecurring: &gt;more text>"
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831149814" expanded>

Need to add constant to replace magic literal for `splitEditInfo[0]`
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831193231" expanded>

Can add this to DateTimeFormat class as a constant
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831196838" expanded>

Can Add a constant to replace the magic literal
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831197538" expanded>

Same issue as above. (Add constant to magic literal)
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831198488" expanded>

Same issue as described above (replace magic literal)
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831198992" expanded>

Here too
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r831199471" expanded>

Need to replace magic literals
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/59#discussion_r832226450" expanded>

I think calling printPendingTasks is more suitable, since it only shows tasks which are unmaked
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/59#discussion_r832235749" expanded>

Try to avoid deep nesting of if-else. You can refer to [here](https://nus-cs2113-ay2122s2.github.io/website/se-book-adapted/chapters/codeQuality.html#avoid-deep-nesting) for more info of what I mean 
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/59#discussion_r832234108" expanded>

This part can be reworked on. Perhaps can restructure the if else logic, or abstract some parts to prevent an arrowhead style code.
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/61#discussion_r832865477" expanded>

Not sure if this is needed, since you are essentially checking if the taskList you've added is the same taskList which you just add.
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834165005" expanded>

For the identifier, I was thinking that there's no need to generate a random number at the start. Simply sort the array first using a comparator, then call another method which loops through the array. Every task will then have its index set to the array index + 1.
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834171599" expanded>

Not sure if this is needed since the timetable will reflect the tasks to the user
</panel>

<panel  header="**70 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834175319" expanded>

These would fall under TaskList class to sort the array and assign the identifiers/ task list index.
</panel>

<panel  header="**71 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834285026" expanded>

To add constant for this magic literal
</panel>

<panel  header="**72 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834286374" expanded>

can shift to commonLogic. Also, a more suitable name can be taskLogic since this class handles task related calculation.
</panel>

<panel  header="**73 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834286524" expanded>

Same for here.
</panel>

<panel  header="**74 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834286733" expanded>

Can shift this to commonLogic
</panel>

<panel  header="**75 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834330084" expanded>

Most of the code can be brought over to taskLogic, since this actually handles checking and setting of values to prepare to add the task to tasklist
</panel>

<panel  header="**76 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834331111" expanded>

lines 27 to 43 can be brought over to taskLogic since this is the logic implementation of preparing the task to be added to task list
</panel>

<panel  header="**77 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834331968" expanded>

Lines 40 to  61 can be part of taskLogic
</panel>

<panel  header="**78 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839710973" expanded>

Same thing for this line
</panel>

<panel  header="**79 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839715644" expanded>

Can remove this, since you did a try catch in prepareAdd method
</panel>

<panel  header="**80 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839709033" expanded>

you can perhaps change `taskToEdit.getRepeatFrequency() != Frequency.SINGLE` to 
`!taskToEdit.getRepeatFrequency().equals(Frequency.SINGLE)`. Using != checks if two objects have the same reference or not, which is what we do not want to check for.
</panel>

<panel  header="**81 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839724024" expanded>

Does this remove the current task we want to delete as well? I'm slightly confused by the extra check for `task.getIndex() >= taskToBeRemoved.getIndex()`.
</panel>

<panel  header="**82 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839766869" expanded>

In that case, we'll need to specify this in the UG, i.e. only future instances of recurring tasks will have its content changed along with the current edited task
</panel>

<panel  header="**83 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842668993" expanded>

Do we need to calculate such an offset? I was thinking that it doesn't really matter even if the user gives the same input (i.e. the date/Time offsets == 0), since we'll be overwriting the existing doOnStartDateTime and doOnEndDateTime for most cases in the updateTask() method.
</panel>

<panel  header="**84 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842678547" expanded>

These are checked for in the checkDateTimeClash method, specifically isByDateBeforeDoOnDate() and isStartTimeClashWithEndTime()
</panel>

<panel  header="**85 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842679903" expanded>

If you'd like, I think you can put this in the checkDateTimeClash() method.
</panel>

<panel  header="**86 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842681059" expanded>

If you intend to keep this if-else, you'll need to add another else as part of the [coding standard](https://se-education.org/guides/conventions/java/basic.html#layout).
</panel>

<panel  header="**87 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842687956" expanded>

I couldn't highlight that part cuz I already highlighted it in my previous comments, but just a brief summary of how the method body looks like:
 
```
If (cond 1) {

} else if (cond 2) {

} else if (cond 3) {

}
```

There should be another else statement after the last else-if
</panel>

<panel  header="**88 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/144#discussion_r843995777" expanded>

You can merge this if with the other if statement that is within, e.g.

```
if (!isFromFile && !taskToCheck.isDone() && taskToCheck.getDoOnStartDateTime().isBefore(LocalDateTime.now()) {
 // some stuff
}
```
instead of creating an if statement encompassing another if statement
</panel>

<panel  header="**89 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/144#discussion_r844054340" expanded>

yeap can change to that to avoid if-else nesting
</panel>

<panel  header="**90 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/152#discussion_r846593989" expanded>

Can you help to move all the command constants into the constant package? Maybe can create a new class within that package to contain them. Thank you!
</panel>

<panel  header="**91 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/152#discussion_r846594405" expanded>

add newline
</panel>

<panel  header="**92 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/152#discussion_r846594414" expanded>

add newline to here
</panel>

<panel  header="**93 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/152#discussion_r846594480" expanded>

add newline 
</panel>

<panel  header="**94 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/151#discussion_r846601915" expanded>

Need to edit this line to 

```
return !taskToCheck.getByDateTime().isAfter(taskToCheck.getDoOnEndDateTime);
```

since we now include time as part of the deadline parameter
</panel>

<panel  header="**95 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/153#discussion_r846624351" expanded>

Violates convention. You can change to "Creates an object..."
</panel>

<panel  header="**96 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823326797" expanded>

For which line do u mean? For the default branch, adding 8 spaces will throw a checkstyle error.
</panel>

<panel  header="**97 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823327355" expanded>

This was part of the import code. What do u mean by revert?
</panel>

<panel  header="**98 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823329382" expanded>

woah cool cool, I'll try the diff colours
</panel>

<panel  header="**99 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/41#discussion_r827966096" expanded>

Lines were wrapped as it was nearly reaching the 120 character limit.
</panel>

<panel  header="**100 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/41#discussion_r827966199" expanded>

Same situation as above
</panel>

<panel  header="**101 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/53#discussion_r830737718" expanded>

ok will restructure the code again
</panel>

<panel  header="**102 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/53#discussion_r830738009" expanded>

I'll rename the variable `iteration` to `rowNumber`. Other than that, it'll be quite difficult to change the structure since different rows in the timetable will print different content. I used if-else since a switch case will make the method even longer than necessary. 
</panel>

<panel  header="**103 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/161#discussion_r846978327" expanded>

yeap, accidental typo. Will change it
</panel>

<panel  header="**104 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/161#discussion_r846978523" expanded>

Thanks for pointing it out! Will edit that part.
</panel>

<panel  header="**105 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/161#discussion_r847022059" expanded>

Yeap I've changed it in the latest commit. Thanks for pointing it out!
</panel>

<panel  header="**106 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/32#issuecomment-1064781462" expanded>

To take note of the formatting of indentation, will need to confirm the after the prof has replied on the forum.
</panel>

<panel  header="**107 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/109#issuecomment-1087055120" expanded>

example test case:

![image](https://user-images.githubusercontent.com/69579839/161466040-9d8e1634-bc50-4fc9-8337-c2dfc1b221ae.png)

</panel>

<panel  header="**108 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/103#issuecomment-1087102324" expanded>

Closed because a recurring task must specify a repeat frequency. Adding of a non-recurring (single) task already assumes the task does not have the repeat frequency. This is supplemented by the `/repeat` delimiter.
</panel>

<panel  header="**109 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/111#issuecomment-1087109512" expanded>

Another example test case:

![image](https://user-images.githubusercontent.com/69579839/161475069-b5275b91-1bcc-4cd0-aace-f7e8773c478c.png)

</panel>

<panel  header="**110 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/109#issuecomment-1088923590" expanded>

This can be quite confusing to the users. Will need a more standardised format for listing tasks. Let's discuss more in our meeting.
</panel>

<panel  header="**111 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/117#issuecomment-1090267116" expanded>

Closed because the bug has been resolved
</panel>

<panel  header="**112 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/132#issuecomment-1093988848" expanded>

Closed as it has been fixed
</panel>

</panel>


<panel type="info" header="### 4. SEAH.. HAN `@khseah` (91 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822563703" expanded>

This javadoc should be for the parseInput method below.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822564677" expanded>

Would this be better? Then we don't need the setDescription and setAmount methods.
```suggestion
        this.description = description;
        this.amount = amount;
```
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822565958" expanded>

Hmm I'm not sure if we need a Functions class... I think we can keep it first, if it comes in useful later on then we can keep it, if not then can just delete.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822567860" expanded>

I think we can just leave it here first. I was hoping when you guys add on more cases the issue disappears...
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822569873" expanded>

I don't really like having the lines as it makes the display abit cluttered? I was going for abit of minimalist design, but can just leave it here first and see what the rest feel about it. Also I think the "+" should be on a new line, the Java CI complaining
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/24#discussion_r823504241" expanded>

Maybe just add a newline so github wont complain
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/24#discussion_r823505472" expanded>

I think there is a folder to write all the JUnit tests. src > test > java > seedu.mindmymoney > MindMyMoneyTest. Maybe can add there instead? Or create a command folder similar to the one in main and add the AddCommandTest there.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/24#discussion_r823552549" expanded>

Ahh I've missed that, my bad. Yup, then everything looks good!
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/33#discussion_r824424049" expanded>

Missing whitespace
```suggestion
        assertEquals(testList, Lists.expenditures);
```
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/39#discussion_r825299341" expanded>

Maybe add a new line before this line? To "break up" the 2 test cases.
```suggestion

        String inputString2 = "expenditure2 54321";
```
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/39#discussion_r825300177" expanded>

```suggestion
    void listToString_multipleInputs_expectString() {
```
Maybe change happyPath to something more descriptive?
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/39#discussion_r825303019" expanded>

```suggestion
        int indexOfList = 1;
```
Maybe just use int to be consistent with the rest of the code
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/46#discussion_r827671834" expanded>

I think can just put the releases URL, when we create our JAR file then it will show up
```suggestion
2. Down the latest version of `MindMyMoney` from [here](https://github.com/AY2122S2-CS2113T-T10-4/tp/releases).
```
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/46#discussion_r827672608" expanded>

Same as above
```suggestion
2. Down the latest version of `MindMyMoney` from [here](https://github.com/AY2122S2-CS2113T-T10-4/tp/releases).
```
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/46#discussion_r827673516" expanded>

Hmm maybe these 2 lines not necessary? I feel the introduction of UG should just explain what the product is/what it does.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/46#discussion_r827675798" expanded>

I think it's good to mention the [SQUARE_BRACKETS] are the compulsory parameters
```suggestion
The following are features of the `MindMyMoney` application. Please ensure that the format of commands given is accurate. Words in `[SQUARE_BRACKETS]` are the parameters. <br>
```
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/46#discussion_r827676577" expanded>

Maybe the last part not necessary
```suggestion
Prints a list of currently available commands<br> 
```
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/48#discussion_r827965145" expanded>

I think can remove the last part of the message?
```suggestion
        System.out.print(PrintStrings.LINE + "Bye! Hope to see you again!"
```
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/48#discussion_r827966420" expanded>

If we are changing the message, then we need to change the expected output too
```suggestion
Bye! Hope to see you again!
```
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832836567" expanded>

Is there a reason why you used the '#' symbol instead of '.'? I think '.' would be better, unless it causes some formatting issues...
```suggestion
3. The application invokes `Addcommand.execute` to execute user instruction.
4. During the execution, `Addcommand.execute` will parse through user input to obtain the `EXPENDITURE`, `CATEGORY`,
```
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832837128" expanded>

HAHA remember to change
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832837752" expanded>

Extra whitespace?
```suggestion
     * @param input The command to be parsed.
```
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832840873" expanded>

Maybe can refactor out this code as another method. Increases SLAP and eliminates the "arrowhead". Likewise for the other switch cases
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833455292" expanded>

Maybe can highlight Parser.parseCommand() since it's part of our code. Also some rephrasing to suit the starting prompt "The command component:"
```suggestion
- Provides all the Command classes which can be instantiated by `Parser.parseCommand()`. The Command objects can then be executed. Only 1 Command object can be 
```
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833463829" expanded>

Then this line is not needed
```suggestion
```
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833466672" expanded>

Rename functions to methods. Also need rephrase to suit the starting prompt "The storage component"
```suggestion
and `save()` methods. 
```
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833485619" expanded>

Maybe can move these 2 lines before "The Command component:"
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833500021" expanded>

Likewise, need rephrase to suit the starting prompt
```suggestion
- Includes a `.executeCommand()` method in all Command classes which performs the relevant command and throws exceptions if an error is encountered. The error is then handled.
```
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833501701" expanded>

Maybe highlight this
```suggestion
- When the program starts up, the `MMM` class will initialise a `Storage` object. The `Storage` class consists of a `load()` 
```
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833504269" expanded>

Rename function to method, and local storage to hard disk. Similar to above, need rephrase to suit the starting prompt
```suggestion
- At the same time, `MMM` will call the `load` method and load any data that is stored on the hard disk.
```
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/74#discussion_r835739300" expanded>

As mentioned, maybe we stick to 1 help command that lists everything
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/74#discussion_r835739723" expanded>

Maybe can change to use the .isEmpty() method instead, then can avoid the magic literal 0 also
```suggestion
        if (creditCardList.isEmpty()) {
```
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838508146" expanded>

Content page I think your still working on it? Bcos this is the UG content page haha. I can work on it if you're doing other things
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838509924" expanded>

Grammar and capitalize MindMyMoney
```suggestion
This document specifies architecture and software design decisions for the application, MindMyMoney. The intended audience is for developers, designers and software testers.
```
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838512970" expanded>

This part maybe can merge with "Purpose" above?
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838517769" expanded>

```suggestion
### Using the Developer Guide
```
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838518891" expanded>

```suggestion
MindMyMoney.
```
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838520342" expanded>

Add new line, github complaining haha
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838521532" expanded>

I'm assuming you mean text?
```suggestion
Data stored in the application is saved into text files locally on the user's device.  
```
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838524828" expanded>

```suggestion
This section describes some noteworthy details on how certain features of MindMyMoney are implemented.
```
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838528518" expanded>

return missing
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838529424" expanded>

Consider extracting out code to improve SLAP and avoid "arrowhead" style
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838530531" expanded>

Minor thing, but can just return false
```suggestion
        return false;
```
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838531844" expanded>

same as above
```suggestion
        return false;
```
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838534769" expanded>

Split into chunks so its not a wall of code
```suggestion
        ExpenditureList expenditureTestList = new ExpenditureList();
        CreditCardList creditCardTestList = new CreditCardList();
        IncomeList incomeList = new IncomeList();
        User user = new User(expenditureTestList, creditCardTestList, incomeList);
        
        String inputString = "/pm cash /c Personal /d Nike Shoes /a 300 /t 30/03/2022";
        new AddCommand(inputString, user).executeCommand();
        
        String listInString = new ListCommand("/e 03/2022", user).expenditureListToString();
        assertEquals("1. $300.0 was spent on Nike Shoes(Personal) using Cash [30/03/2022]\n", listInString);
        
        String inputString2 = "/pm cash /c Food /d Cream Pie /a 69 /t 30/03/2022";
        new AddCommand(inputString2, user).executeCommand();
        
        String inputString3 = "/pm cash /c Food /d Cream Pie /a 69 /t 30/04/2022";
        new AddCommand(inputString3, user).executeCommand();
        
        listInString = new ListCommand("/e 03/2022", user).expenditureListToString();
        assertEquals("1. $300.0 was spent on Nike Shoes(Personal) using Cash [30/03/2022]\n"
                + "2. $69.0 was spent on Cream Pie(Food) using Cash [30/03/2022]\n", listInString);
```
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838535882" expanded>

similar to above, can consider splitting into chunks
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838537524" expanded>

HAHAHAHA the picture made my day
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/142#discussion_r841083192" expanded>

Maybe can add a new line here to "break up" the code, so its not a continuous chunk of code
```suggestion
        
        String inputString = "/pm cash /c Personal /d Nike Shoes /a 300 /t 30/03/2022";
```
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/142#discussion_r841083268" expanded>

Similar as above
```suggestion
        
        String inputString = "/pm cash /c Personal /d Nike Shoes /a 300 /t 30/03/2022";
```
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841083498" expanded>

If I recall correctly, comments must have a whitespace after //
```suggestion
            // Create new expenditure object to substitute in
```
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841083668" expanded>

Maybe can refactor out each condition to improve SLAP and readability
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841083933" expanded>

Refine javadoc format
```suggestion
     **/
```
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084002" expanded>

Can delete this line
```suggestion
```
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084009" expanded>

```suggestion
     **/
```
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084073" expanded>

```suggestion
     **/
```
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084237" expanded>

Remove magic literal, remember to import the constant
```suggestion
            assertEquals(testUser.getCreditCardListArray().get(INDEX_OF_FIRST_ITEM).toString(), newCreditCard.toString());
```
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084248" expanded>

```suggestion
     **/
```
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084265" expanded>

```suggestion
     **/
```
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084317" expanded>

```suggestion
     **/
```
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084344" expanded>

```suggestion
            assertEquals(testUser.getIncomeListArray().get(INDEX_OF_FIRST_ITEM).toString(), newIncome.toString());
```
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084356" expanded>

```suggestion
     **/
```
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841084381" expanded>

```suggestion
     **/
```
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846909963" expanded>

I think using '.' is better?
```suggestion
2. `MMM` then calls `Storage.load()`, which initializes a `Scanner` that reads the data file.
```
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846910098" expanded>

```suggestion
3. `Storage` invokes `User.deserializeFrom()`, which reads a serialized User over the `Scanner`.
```
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846910204" expanded>

```suggestion
4. `User` calls `ExpenditureList.deserializeFrom()`, which returns an `ExpenditureList` read from the `Scanner`.
```
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846910336" expanded>

```suggestion
5. `User` then does the same for `CreditCardList.deserializeFrom()` and `IncomeList.deserializeFrom()`, which
```
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846910627" expanded>

I think having brackets makes it clearer that it's a method call
```suggestion
1. `ExpenditureList` calls `SerializerFunctions.convertInputToList()`, which accepts a function
```
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846910738" expanded>

```suggestion
that deserializes a line of input. Here, `Expenditure.deserialize()` is passed to `convertInputToList()`.
```
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846911362" expanded>

```suggestion
invokes `Expenditure.deserialize()` on this line, which returns an `Expenditure`. This is repeated until
```
</panel>

<panel  header="**70 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846911403" expanded>

```suggestion
3. `Expenditure` invokes `PropertyList.deserialize()` to convert the input line into a set of key-value pairs.
```
</panel>

<panel  header="**71 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846911535" expanded>

```suggestion
Then, it makes a series of `PropertyList.getValue()` calls to obtain the values of each individual property.
```
</panel>

<panel  header="**72 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846911601" expanded>

```suggestion
4. Once all attributes have been processed, `Expenditure.deserialize()` returns an `Expenditure`.
```
</panel>

<panel  header="**73 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846911773" expanded>

```suggestion
1. After every command, `MMM` invokes `Storage.save()`.
```
</panel>

<panel  header="**74 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846911841" expanded>

```suggestion
2. `Storage` invokes `User.serialize()`.
```
</panel>

<panel  header="**75 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846911927" expanded>

```suggestion
3. `User` calls `ExpenditureList.serialize()`, which returns a `String`, representing the serialized 
```
</panel>

<panel  header="**76 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846912029" expanded>

```suggestion
4. `User` then does the same for `CreditCardList.deserializeFrom()` and `IncomeList.deserializeFrom()`, which
```
</panel>

<panel  header="**77 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846912451" expanded>

Is the 's' a typo?
```suggestion
`MMMSerializable` is being serialized. Although the given diagram shows the interaction for an
```
</panel>

<panel  header="**78 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846912929" expanded>

```suggestion
1. `ExpenditureList` calls `SerializerFunctions.addListToStringBuilder()`, passing in an `ArrayList` of 
```
</panel>

<panel  header="**79 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846912995" expanded>

```suggestion
   invokes `Expenditure.propetyList()` on this line, which returns an `Expenditure`. This is repeated until
```
</panel>

<panel  header="**80 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846913044" expanded>

```suggestion
   Then, it makes a series of `PropertyList.setValue()` calls to save each of its attributes.
```
</panel>

<panel  header="**81 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846913076" expanded>

```suggestion
4. Once all attributes have been processed, `PropertyList.serialize()` is called, and
```
</panel>

<panel  header="**82 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846913127" expanded>

```suggestion
this serialized `PropertyList` is returned by `Expenditure.serialize()`.
```
</panel>

<panel  header="**83 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846913488" expanded>

```suggestion
@enduml

```
</panel>

<panel  header="**84 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846913516" expanded>

```suggestion
@enduml

```
</panel>

<panel  header="**85 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846913593" expanded>

```suggestion
@enduml

```
</panel>

<panel  header="**86 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846913715" expanded>

Just add a newline so GitHub won't complain haha
```suggestion
@enduml

```
</panel>

<panel  header="**87 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846914424" expanded>

Hide footbox to disable participants at the bottom of sequence diagram
```suggestion
hide footbox

```
</panel>

<panel  header="**88 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846914528" expanded>

```suggestion
hide footbox

```
</panel>

<panel  header="**89 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846914563" expanded>

```suggestion
hide footbox

```
</panel>

<panel  header="**90 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/203#discussion_r846914644" expanded>

```suggestion
hide footbox

```
</panel>

<panel  header="**91 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/230#discussion_r847252376" expanded>

nitpick but caps. Also, not sure if we should explain what ASCII is
```suggestion
>- Only use ASCII characters when entering commands into the application. Otherwise, your input may not be properly displayed in the command line.
```
</panel>

<panel  header="**92 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/51#discussion_r828029351" expanded>

Okay, changed the indents!
</panel>

<panel  header="**93 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/77#discussion_r837028664" expanded>

Ya good point, but in this case how to put above, cos it will intefere with the if else structure...

</panel>

<panel  header="**94 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/10#issuecomment-1062637449" expanded>

Implemented and closing
</panel>

<panel  header="**95 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/118#issuecomment-1087118743" expanded>

Fixed and closing
</panel>

<panel  header="**96 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/126#issuecomment-1087118880" expanded>

Fixed and closing
</panel>

</panel>


<panel type="info" header="### 5. LOW ..ALAN `@alanlowzies` (79 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820540053" expanded>

Perhaps this extra empty line can be removed?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820542769" expanded>

Perhaps there can be an empty line before Line 62 to separate the loop and the conditional statement.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/21#discussion_r822273376" expanded>

Didn't know you could do that. Very cool!
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/21#discussion_r822273501" expanded>

Great abstraction!
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/22#discussion_r822581466" expanded>

I'm not sure if this comment is meant to be removed before the PR or not haha, but just highlighting this in case.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/33#discussion_r823720353" expanded>

Perhaps to be consistent with the rest of the program, this variable need not be `final`?
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/46#discussion_r825284624" expanded>

Should this line be indented with 8 spaces instead of 22?

From the [Java coding standard](https://se-education.org/guides/conventions/java/basic.html#layout) website:
> **Indentation for wrapped lines should be 8 spaces** (i.e. twice the normal indentation of 4 spaces) more than the parent line.

</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/46#discussion_r825284741" expanded>

Just a minor naming suggestion: perhaps `updateWorkout` can be renamed to `updatedWorkout`? To better indicate that this variable will store the `Workout` object that has been updated. 🙂 
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/46#discussion_r825284910" expanded>

Good use of accessor method to update a private field 🙂👍🏻 
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/46#discussion_r825285077" expanded>

Agreed, helps to minimise duplicated codes 👍🏻 
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/55#discussion_r825651440" expanded>

Consider changing 'remove' to 'removes' for consistency.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/55#discussion_r825652163" expanded>

Keep this line as it determines the theme of the website.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/71#discussion_r827000732" expanded>

(Reported by Gradle's checkstyle module) The `+` icon should be on the wrapped line on Line 250
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/71#discussion_r827001474" expanded>

(Reported by Gradle's checkstyle module) The closing parenthesis on Line 250 has an extra space before it.
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/71#discussion_r827003058" expanded>

Sounds better! Good change :)
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/74#discussion_r827964376" expanded>

Perhaps the second part of the sentence could be rephrased to '..., enter the following command:'? The original phrase sounds like a suggestion, which sounds a bit off in this context.
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/74#discussion_r827965478" expanded>

Consider adding the word 'the' in-between 'Now' and 'workout'.
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830450425" expanded>

Should include `LogHandler.linkToFileLogger(logger);` to get the log messages in this class to be written to the log file.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830450517" expanded>

Perhaps this empty line can be removed to be consistent with the other `catch` blocks?
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830450547" expanded>

Perhaps this extra line can be removed?
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830450627" expanded>

Perhaps this variable name can be renamed to `listOfWorkouts`?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830450964" expanded>

Perhaps this constant can be moved to the top of the class so as to maintain consistency with the other classes.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830451689" expanded>

Would it be possible to extract this chunk of code into a method? Seems to be a little bit too deeply nested.

> https://nus-cs2113-ay2122s2.github.io/website/schedule/week4/topics.html#implementation-code-quality-readability-basic-avoid-deep-nesting
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830451707" expanded>

Perhaps this empty line can be removed?
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/100#discussion_r830546416" expanded>

Perhaps this extra empty line can be removed?
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/110#discussion_r832752276" expanded>

Would it be better if we placed the 'Design' and 'Implementation' sections here directly instead? So that we follow the original format more closely.

So something like

## ~Design & Implementation~

## Design
_design stuff_

---

## Implementation
_implementation stuff_
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/118#discussion_r833243106" expanded>

Good additional test cases
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833826546" expanded>

Would it be feasible to extract this to the `UI.java` class? I was thinking since this is a UI-related method, would be better to give it to the UI class to handle.
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833826892" expanded>

This method too, is it possible to bring it to the UI class?
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/128#discussion_r833827677" expanded>

Very nice 👍
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/134#discussion_r834313613" expanded>

Great job improving the ToC!
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/134#discussion_r834320790" expanded>

I think to be safe, can consider adding an extra line between these two lines to avoid any potential rendering issues.
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/134#discussion_r834339435" expanded>

I think the workouts file is called `workouts.txt` instead of `resource.txt` 😬
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/134#discussion_r834340401" expanded>

This one seems to have some rendering issue on GitHub's website, but as discussed with you, I think this is a non-issue, can be verified after merging.
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/138#discussion_r835110867" expanded>

Should we use a constant for `"rest day"`?
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/136#discussion_r835112721" expanded>

The first letters of header words should be capitalised.
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/139#discussion_r835782003" expanded>

Perhaps each condition can be enclosed in its own parentheses? That is, `assert ((numberOfWorkoutsInPlan &gt;= MAX_NUMBER_OF_WORKOUTS_IN_A_PLAN) && (numberOfWorkoutsInPlan > 0));`

If you want, perhaps you could also add a message for when the assertion fails.
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835847820" expanded>

Should the 'Terminology' section be placed after the table of contents? I feel that the ToC should be closer to the top. Maybe the other team members can weigh in on this too.
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835848858" expanded>

Perhaps the extra spaces after the forward slashes can be omitted?

So it will look like "...it to be a **workout/plan/schedule/search** command".
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835849558" expanded>

Perhaps the phrase "..., you will be prompt to give permission to continue the printing" can be reworded to
> ", ... you will be **prompted** on **whether you wish to display the next 10 (or fewer) workouts in the list**."

It's wordier, but I feel it has a softer tone for the reader. 🙂
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/146#discussion_r835993189" expanded>

Perhaps a comma can be added after "Now" and the word "the" can be removed. 

> "Now, ~the~ workout number 1..."
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/148#discussion_r835993878" expanded>

Perhaps the exception message can be modified to something like
> Uh oh, an existing plan with the same workout sequence already exists.

This way it'll be more consistent with the other exception messages.
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/148#discussion_r835994652" expanded>

Perhaps each condition can be enclosed with its own parentheses to make the two conditions more distinguishable from each other?
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/148#discussion_r835995198" expanded>

Nice that the codes to check for the plan validity are extracted into their respective methods. Good job
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/163#discussion_r837594285" expanded>

Am I right to assume that this (enhanced) `for` loop is meant to print the plans with the outdated workout?

If so, perhaps consider printing an additional statement prior to this `for` loop to indicate what these plans are for.

For example: "The following plans contains the workout that was just changed and will be updated:"
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/163#discussion_r837617110" expanded>

Yep, it'll improve readability (as what you've mentioned in Telegram 🙂)
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/164#discussion_r838066010" expanded>

Perhaps this reference can be placed directly below 'AddressBook-Level2 project'? Since the two of them are related.
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/164#discussion_r838066208" expanded>

Nice improvement to bold the steps!
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/164#discussion_r838068680" expanded>

Perhaps the following sentence could be rephrased:
| Original | Revised |
| --- | --- |
| This is a faster implementation, however, more complicated due to the way the workout data are formatted and stored in the `workouts.txt` file. | **While** this is a ~faster~ **more efficicient** implementation, ~however, more complicated~ **it is more complex** due to the way the workout data are formatted and stored in the `workouts.txt` file. |

Note: I bolded the text to highlight the edited words, but they should not be bolded in the actual change 😬 
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/164#discussion_r838070274" expanded>

I think you missed out on the word 'diagram' in 'sequence diagram'
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/164#discussion_r838071548" expanded>

Perhaps the sentence can be more concise:

> Hence, to simplify the implementation, the team decided to ~implement our current implementation - that
is, to~ **simply** rewrite all **workouts** to the resource file whenever a workout is deleted.

Note: I bolded the text to highlight the edited words, but they should not be bolded in the actual change 😬
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/180#discussion_r840140069" expanded>

Nice work on finding out how to disable this. I will adopt this for my sequence diagrams too! Thank you :)
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/180#discussion_r840140508" expanded>

The use of emojis is nice, but we'll need to be mindful of that when we convert our docs into PDF format for submission.
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/180#discussion_r840141210" expanded>

Perhaps a (H3) subheader for this section may help distinguish it from the introductory notes of the above part better.
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/180#discussion_r840142067" expanded>

Oops, thanks for fixing that grammatical error 😅👍🏻 
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r840994577" expanded>

Would it be possible to call the existing `createWorkoutFile()` method to create the file? That way some redundant code can be removed. Similar for the other files.

In addition, perhaps some `Logger` calls can be done to log that the file has been deleted?
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r840995465" expanded>

Perhaps there should be an empty space between the method description and `@param`?
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r840995692" expanded>

Since the cascade keyword is a 'delete' action keyword, would it be more feasible to use an existing constant such as `WorkoutCommand.DELETE_ACTION_KEYWORD`? This way some redundancy can be removed (in my opinion, at least).
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r840996066" expanded>

Good implementation!
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r840996195" expanded>

Since this is a file-related method, would it be for it to be in the `FileManager` class?
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841004652" expanded>

Yup, that's what I meant, since we already have a dedicated method create the file. So you keep the `workoutFile.delete()` and replace line 77 with `createWorkoutFile()`.
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841004803" expanded>

Oh yeah, I forgot about that design consideration. Thanks for pointing it out! Then yeah can keep this method in the `WerkIt` class. Thank you :)
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/223#discussion_r841102044" expanded>

Thanks for spotting that error 😅 
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/223#discussion_r841102351" expanded>

(Very minor issue) Perhaps the newline `\n` can be placed before the colon for consistency?
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/223#discussion_r841102594" expanded>

Should this be removed? I don't see where the `deleteCommand` is used in the sequence diagram.
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r841163335" expanded>

(For future reference) The topic was taken to Telegram and resolved there. 
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/232#discussion_r841265672" expanded>

Perhaps the phrase "discouraged from editing the local..." can be rephrased to "warned not to edit the local..."? I've updated the user guide to warn users not to edit the files instead of "strongly discouraging" them.
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/232#discussion_r841266115" expanded>

Perhaps the following edit can be considered?

Rephrasing
> However, we tried to think in the perspective of users to save the "uncorrupted data" as much as possible. Thus, ...

to

> However, in order to provide the best possible user experience by minimising the amount of data lost in such situations, we have decided to implement......
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/235#discussion_r841309783" expanded>

Perhaps "exception-related" can be hyphenated?
</panel>

<panel  header="**70 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/249#discussion_r843421149" expanded>

Perhaps the word 'User' can be changed to its plural form 'Users'?
</panel>

<panel  header="**71 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/249#discussion_r843423316" expanded>

I notice that you have added these two `UI` methods that are used by `FileManager`. Perhaps you can add a dependency line from `FileManager` to `UI`?
</panel>

<panel  header="**72 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/253#discussion_r843424582" expanded>

Perhaps an extra line can be added between the method description and the @param?
</panel>

<panel  header="**73 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/257#discussion_r843516803" expanded>

Perhaps this phrase
> `Logic`: Executes the intended command of the user.

can be rephrased to

> `Logic`: Executes the appropriate command as intended by the user.

</panel>

<panel  header="**74 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/257#discussion_r843519150" expanded>

Perhaps 'is' can be changed to 'are'? Since we're saying that all other methods are executed.
</panel>

<panel  header="**75 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/272#discussion_r844638069" expanded>

Perhaps the comma at the end of line 1011 can be omitted?
</panel>

<panel  header="**76 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/272#discussion_r844639286" expanded>

I think the previous version "...in greater detail" sounds better?

Also, is the phrase "schedule /update" meant to be marked up?
</panel>

<panel  header="**77 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/272#discussion_r844640948" expanded>

I think the exception's name is `ArrayIndexOutOfBoundsException`
</panel>

<panel  header="**78 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/301#discussion_r846555979" expanded>

The colour for the Storage component has been changed. Perhaps you could include the `Style.puml` file and use the constant `COLOR_STORAGE` instead? Can refer to #290 if you need a guide.
</panel>

<panel  header="**79 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/301#discussion_r846617543" expanded>

Here are some suggestions for your consideration:

- (Point 2) Perhaps the word 'corresponding' at the end of Point 2 can be prefixed with the word 'the'?
- (Point 3) Perhaps the sentence can be rephrased to "When the `Command` object is executed, a sequence of actions will be performed. The actions performed are dependent on the type of action specified by the user."
- (Point 4) "After the execution process has finished, an appropriate message will be printed to show **the** user that the command is executed successfully."
- (Point 5) "~At last~ **Finally**, the change ..."

Note that the bolded points are not meant to be actually bolded. They're just to indicate words that I've added on to your existing sentence :)
</panel>

<panel  header="**80 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820105158" expanded>

Yup, I intend to work on implementing more checks on the process. Thanks for pointing it out!
</panel>

<panel  header="**81 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820105187" expanded>

Thanks!
</panel>

<panel  header="**82 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820105888" expanded>

Added issue #18 to track this feedback.
</panel>

<panel  header="**83 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820168080" expanded>

Fixed in a61df74
</panel>

<panel  header="**84 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820168093" expanded>

Fixed in 1f4ef76
</panel>

<panel  header="**85 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820169023" expanded>

Catching and handling `NumberFormatException` has been implemented in Commit 1742668.

https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/18#issuecomment-1059878336
</panel>

<panel  header="**86 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823476237" expanded>

Thanks for spotting this. I was creating some accessor methods and missed out on some of them.

Changed in Commit ce06262
</panel>

<panel  header="**87 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823476302" expanded>

Suggestion adopted in Commit ce06262
</panel>

<panel  header="**88 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823476384" expanded>

Thanks for spotting this. Removed in Commit ce06262


</panel>

<panel  header="**89 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#discussion_r823479968" expanded>

This method doesn't add the data into the file itself. It converts the `Workout` data into a format that is meant to be stored in the text file. For example, if the `Workout` object is `russian twist` with `1000` reps, the method will return `russian twist | 1000`. It will not do the writing operation. Hence the name `convertWorkout...` into a `...FileDataFormat`.

The actual writing to the file is done in either the `writeNewWorkoutToFile` or `rewriteAllWorkoutsToFile` methods.
</panel>

<panel  header="**90 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/45#discussion_r825282992" expanded>

Oops, missed that part. Thanks for spotting it :)
</panel>

<panel  header="**91 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/45#discussion_r825283304" expanded>

Thanks for reminding me. It has since been removed in Commit 1153cdd.
</panel>

<panel  header="**92 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/45#discussion_r825283274" expanded>

Fixed in Commit 1153cdd
</panel>

<panel  header="**93 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/95#discussion_r829736484" expanded>

Discussed with @Musfirahe0556596. The initial suggestion was to create a second variable so that there will be two variables: one to represent the object before updating (`workoutToUpdate`) and another to represent the object after updating (`updatedWorkout`). However, we realised this is redundant as both variables point to the same object that will be updated. Thus, the resolution was to rename the variable to `workoutToUpdate`.

The change is reflected in Commit d3b661a.
</panel>

<panel  header="**94 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/112#discussion_r832747040" expanded>

> Good implementations, thank you.

Thank you :)
</panel>

<panel  header="**95 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/121#discussion_r833280461" expanded>

> Good and clear navigation!

Thank you :)
</panel>

<panel  header="**96 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/145#discussion_r835931744" expanded>

Thank you for your feedback! It has been implemented in Commit 5e7ff2e
</panel>

<panel  header="**97 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/174#discussion_r839163095" expanded>

Thank you for your feedback. This change has been implemented in Commit 5a92004
</panel>

<panel  header="**98 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841074549" expanded>

> Is this link not working? - @a1021492980 

Thanks for pointing it out. Funnily it worked on my local machine, but when I just tested it didn't work... weird.

Anyway, I've fixed the broken links in Commit 5aaaeeb by replacing the ampersand with the word 'and'. Please try it out and see if it works now. 🙂 


> i think there is an extra "-" between characters and phrases - @emilysim00 

I think the extra dash is due to the ampersand symbol not being usable for reference links. I've changed it to the word 'and' instead.


</panel>

<panel  header="**99 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841076099" expanded>

Thank you for your feedback, this is now reflected in Commit d40fbe1
</panel>

<panel  header="**100 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841076636" expanded>

Thank you for the feedback. Personally, I think the additional statement prior to the diagram is redundant as my SD already has a title describing the SD.

Nevertheless, I will keep your suggestion in mind and if the rest of the team feels that an additional statement is indeed necessary, I will add it in. 🙂 
</panel>

<panel  header="**101 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841076756" expanded>

Thanks for spotting the errata. It has been fixed in Commit dd5ca9b
</panel>

<panel  header="**102 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841076781" expanded>

Thank you :)
</panel>

<panel  header="**103 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841077006" expanded>

The intention of the see example was to direct the user to the bullet point after this paragraph:

![image](https://user-images.githubusercontent.com/30099983/161385628-5e52df81-dd7e-4f1a-8026-c24188e04054.png)

If it is confusing, should I rephrase it, or should I remove it completely?
</panel>

<panel  header="**104 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841077268" expanded>

Thanks for spotting the errata. It has been fixed in Commit d9b1029
</panel>

<panel  header="**105 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841077545" expanded>

Thanks for your feedback. I have included an additional statement in Commit f9ab5cd.
</panel>

<panel  header="**106 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841077718" expanded>

Thanks for your feedback @Musfirahe0556596 and @emilysim00, I have removed the `execute()` method in the SD in Commit c3c0380. However, please advise if I should remove the statement on this in my write up in the developer guide too.
</panel>

<panel  header="**107 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841088100" expanded>

Discussed on Telegram, we've decided to keep the write up in the DG to provide a link to the other sections.
</panel>

<panel  header="**108 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841089173" expanded>

Discussed via Telegram. We agreed to rephrase the prompt in parentheses. This change is reflected in Commit 943f96b.
</panel>

<panel  header="**109 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/225#discussion_r841097838" expanded>

I learned that you can use 'variable-like' referencing for links. Since this URL is used twice, I thought might as well create a single 'variable' with the link and use the variable in the other parts (in 'Quick Start Guide' and FAQ).

The guide placed it at the bottom of the MD file, so I just followed suit 😬 
</panel>

<panel  header="**110 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/225#discussion_r841101645" expanded>

Thank you for your feedback. It has been implemented in Commit 692f60b
</panel>

<panel  header="**111 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841216921" expanded>

Yeah the link is still WIP, I intend to link to the File Manager section in our DG when I've written it 😬 
</panel>

<panel  header="**112 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841217064" expanded>

I originally used an image, but I thought it would be better if I actually coded the boxes.

Would a screenshot be better? I would like your take on this :)
</panel>

<panel  header="**113 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841217342" expanded>

Good spot! Thanks for finding it :) Fixed in Commit c71b98c.
</panel>

<panel  header="**114 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841217472" expanded>

Hmm, I'm not too sure about that 😅 
</panel>

<panel  header="**115 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841217650" expanded>

Haha I did review more uh, but I didn't want to list them all, as I thought it could be unnecessarily too much 😬 hence I just picked 5 PRs that I felt I gave substantial review comments :)
</panel>

<panel  header="**116 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/226#discussion_r841217785" expanded>

Thanks for finding this one too! Fixed in Commit 6eb8d69.
</panel>

<panel  header="**117 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/231#discussion_r841262670" expanded>

PR is still in drafting stage 😬 
</panel>

<panel  header="**118 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/231#discussion_r841262681" expanded>

PR is still in drafting stage 😬 
</panel>

<panel  header="**119 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/231#discussion_r841334425" expanded>

Thanks :)
</panel>

<panel  header="**120 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/256#discussion_r843469626" expanded>

Thanks for spotting it. It has been fixed in Commit 95f1266.
</panel>

<panel  header="**121 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/250#discussion_r843514614" expanded>

Informed via Telegram. Resolved in Commit 4e71996.
</panel>

<panel  header="**122 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/309#discussion_r846639911" expanded>

Oh, okay. Thanks :) Sorry for the inconvenience!
</panel>

<panel  header="**123 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/6#issuecomment-1058803648" expanded>

Planned procedure:
1. User enters `workout /new &gt;exercise name> /reps &gt;number of reps>`.
2. Application checks for the validity of the user inputs.
    - If the checks fail, print the error and end the process here.
4. Application records exercise into a new workout.
</panel>

<panel  header="**124 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/14#issuecomment-1059027499" expanded>

If time permits, I will try to implement this earlier to open up more time for the 2nd iteration of the tP.
</panel>

<panel  header="**125 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/15#issuecomment-1059184339" expanded>

Other than what @Musfirahe0556596 has mentioned, I think the rest is fine for now. We can iron out the specifics down the road.
</panel>

<panel  header="**126 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/15#issuecomment-1059270708" expanded>

Java CI build failure issue raised in CS2113T forum: https://github.com/nus-cs2113-AY2122S2/forum/issues/44
</panel>

<panel  header="**127 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#issuecomment-1059875317" expanded>

> Just very minor code quality issues otherwise everything is clean and understandable!

Thanks for your feedback! I've made some changes in the respective commits :)
</panel>

<panel  header="**128 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/18#issuecomment-1059878336" expanded>

Catching and handling `NumberFormatException` and `ArrayIndexOutOfBounds` exception in `workout /create` has been added in Commit 1742668
</panel>

<panel  header="**129 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/19#issuecomment-1060309934" expanded>

Putting this PR on hold as the fix does not completely solve the `&gt;p>` tag formatting issue. Will keep this in view.
</panel>

<panel  header="**130 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#issuecomment-1063226722" expanded>

Note: When creating `werkItResources/`, `exercises.txt`, and/or `workouts.txt`, the locations of the directory and files are currently temporarily hidden. 

The Java CI tests on the different operating systems have different file paths to the directory and files. As a result, when the Java CI tests try to compare the actual file paths to the ones in EXPECTED.txt, the paths are deemed as different and hence the tests fail. Thus, in order to avoid failing the Java CI tests, the locations are currently replaced with a constant text until a viable solution can be found for testing with text UI tests.
</panel>

<panel  header="**131 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#issuecomment-1063741497" expanded>

> Good FileManager and code quality improvements, I see no issues👍👍👍

Thanks for your compliment! 😄
</panel>

<panel  header="**132 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/32#issuecomment-1063742068" expanded>

> Overall good file Manager! Just code quality issues here and there :) 👍 

Thanks for your feedback! I'll look at your review and make the changes accordingly 🙂
</panel>

<panel  header="**133 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/37#issuecomment-1064682386" expanded>

PR #36 has some JUnit tests for FileManager.java
</panel>

<panel  header="**134 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/45#issuecomment-1065863617" expanded>

> Documentation looks good!

Thank you :)
</panel>

<panel  header="**135 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/45#issuecomment-1066090815" expanded>

> Nice and clear UG👍

Thanks! :))
</panel>

<panel  header="**136 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/54#issuecomment-1066629268" expanded>

> Looks good! Thank you for providing screenshots too! :)

Thank you :)
</panel>

<panel  header="**137 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/54#issuecomment-1066771501" expanded>

> Good work. It is clear.

Thanks :D
</panel>

<panel  header="**138 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/39#issuecomment-1067029274" expanded>

PR #61 has some JUnit tests for `workout /new` feature in WorkoutList.java.
</panel>

<panel  header="**139 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/39#issuecomment-1067591060" expanded>

Closed with PR #61 
</panel>

<panel  header="**140 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/68#issuecomment-1067899001" expanded>

@a1021492980 Has checked and MacOS's default terminal supports ANSI colour coding out of the box.

**Sample Screenshot (by @a1021492980 )**
![image](https://user-images.githubusercontent.com/30099983/158372378-2b98dc8d-298e-4c71-a475-96aa23291dba.png)

</panel>

<panel  header="**141 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/68#issuecomment-1067903805" expanded>

The default terminal in Ubuntu also supports ANSI colour codes out of the box.

**Sample Screenshot**
![image](https://user-images.githubusercontent.com/30099983/158372973-3eaacc8c-7e49-4100-b018-c90e7adfc23e.png)
</panel>

<panel  header="**142 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/68#issuecomment-1067906574" expanded>

Perhaps the focus of this recommendation can be for users using a Windows machine, since it has two different terminals by default, whereas the other two OSes does not have this issue.

**Proposed Change**
In the 'Quick Start Guide' section, put the following quote:
> **Using a Windows machine?** It is highly recommended that you use **_Windows Powershell_** to run WerkIt in order to get the best experience.

The developer guide can then elaborate on this recommendation.
</panel>

<panel  header="**143 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1069030070" expanded>

Related issue: #75 
</panel>

<panel  header="**144 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1069030620" expanded>

Related issue: #68 
</panel>

<panel  header="**145 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/91#issuecomment-1069331034" expanded>

Initial idea is to use the `HashMap` class in Java. However, `LinkedHashMap` may be a better alternative due to the predictable iteration order.
</panel>

<panel  header="**146 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/69#issuecomment-1069336311" expanded>

Part of a larger task as mentioned in #92.
</panel>

<panel  header="**147 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/90#issuecomment-1070001285" expanded>

> Looks great! Thank you!

Thank you
</panel>

<panel  header="**148 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/91#issuecomment-1070312832" expanded>

Unique IDs for Workout objects have been implemented in PR #95.
</panel>

<panel  header="**149 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/91#issuecomment-1070313068" expanded>

> Initial idea is to use the `HashMap` class in Java. However, `LinkedHashMap` may be a better alternative due to the predictable iteration order.

Currently, the `HashMap` class is being used to maintain simplicity.
</panel>

<panel  header="**150 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/95#issuecomment-1072004684" expanded>

In case my initial PR comment was unclear, the following is a summary of the implementation of the unique identifiers for `Workout` objects:

- A new `HashMap` object is created and stored in `WorkoutList.java`. The keys are the string representations of the `Workout` objects (called by the overridden `toString()` method).
- The `ArrayList` object in `WorkoutList.java` remains, but it will now store the keys that map to their respective `Workout` objects.
    - As such, other functionalities such as listing and updating workouts will not need much change as they can still use indexes to refer to workouts.
    - If the `Workout` object is needed, the new method `getWorkoutFromIndexNum()` can be called.

Should you need more clarification on the new system, please feel free to enquire here or the Telegram group. I'll do my best to explain.
</panel>

<panel  header="**151 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/92#issuecomment-1075345668" expanded>

PR #100 implements the resource file for plans.
</panel>

<panel  header="**152 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/112#issuecomment-1075908212" expanded>

> Looks great!

Thank you :)
</panel>

<panel  header="**153 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/121#issuecomment-1076491573" expanded>

> Very detailed. Team may want to consider writing like this to follow a certain format &hat;_&hat;

Thank you 🙂 🙂 🙂 
</panel>

<panel  header="**154 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/133#issuecomment-1077535325" expanded>

The issue was resolved thanks to this solution on StackOverflow: https://stackoverflow.com/a/18089124
</panel>

<panel  header="**155 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/142#issuecomment-1079923369" expanded>

> Thank you for fixing it in real time
Just felt bad if I didn't do it asap :)

</panel>

<panel  header="**156 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1079956683" expanded>

PR #145 adds some new content to the UG, including:

- Add a warning to discourage users from directly modifying the local data files for the app.
- Change the warning (regarding the pipe character |) format to make it look more obvious.
- Add a list of recommended terminals to use.
- Add an FAQ on file loading issues.

</panel>

<panel  header="**157 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/145#issuecomment-1079965263" expanded>

> Nice job done!

Thank you :)
</panel>

<panel  header="**158 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1080096585" expanded>

PR #146 adds the `plan /details` and `plan /delete` commands to the UG.
</panel>

<panel  header="**159 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/103#issuecomment-1080785023" expanded>

PR #156 has more JUnit test cases for general coverage expansion.
</panel>

<panel  header="**160 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/156#issuecomment-1081332491" expanded>

> Looks good!

Thank you :)
</panel>

<panel  header="**161 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/169#issuecomment-1083391451" expanded>

https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701

Using the Windows Terminal app made by Microsoft will allow Powershell to show the colours as intended.

I will add this troubleshooting step into the UG.
</panel>

<panel  header="**162 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/175#issuecomment-1084084420" expanded>

For Point 8, I think those headers are quite nested (Level 6 if I'm not wrong), which is why the font size is for ants to read 😆. We did notice that, but we're not sure if there's a way for us to explicitly modify the font size for the headers. 😬 
</panel>

<panel  header="**163 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/175#issuecomment-1084092000" expanded>

Okay, we'll try to see if we can make the font size bigger. Thanks for the tip, Prof :)
</panel>

<panel  header="**164 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/206#issuecomment-1086890312" expanded>

Will update the UG to warn users not to modify the resource files. Otherwise, app will crash.
</panel>

<panel  header="**165 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/245#issuecomment-1088303930" expanded>

(Discussed during the meeting on 5 April 2022)

More description of the bug.
- When updating a workout for the first time, the procedure is done properly
- When the same workout is updated subsequent times, the messages that show that the plans have been updated will not be shown.
  - However, the plans are actually updated. 

Lines to check out: 284 and 285 (master branch)
</panel>

<panel  header="**166 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/250#issuecomment-1089258074" expanded>

If a 'button' is directly below a markdown table, add a HTML break tag to prevent clipping issues.
</panel>

<panel  header="**167 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/286#issuecomment-1092606369" expanded>

PR #290 contains the write up for the following:
- Creating a new workout
- Data saving
</panel>

<panel  header="**168 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/322#issuecomment-1094241798" expanded>

> Thank you for your contributions, everything looks nice!

Thanks for the kind words :)
</panel>

</panel>


<panel type="info" header="### 6. ROY ..LONG `@froststein` (68 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/34#discussion_r818723513" expanded>

Consider renaming to @param A descriptive message of error as string.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/51#discussion_r819351837" expanded>

Instead of specifying `Must not be negative` at the end of each `param`, you can add a line as `Assumption: Every field is non negative. `
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/51#discussion_r819352129" expanded>

Similarly for here you can add `Assumption `.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/55#discussion_r819621463" expanded>

Consider removing this check for now as this is the parser's job to check if the user supplied an empty name in the command.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/58#discussion_r819646231" expanded>

Consider line break between for the javadocs.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/129#discussion_r821464125" expanded>

Consider renaming the variable `that` to give more information
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/129#discussion_r821464924" expanded>

Perhaps rename this function to `getUserConfirmation`
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/141#discussion_r822419174" expanded>

This naming could be misleading as totalcost is an attribute, perhaps renaming this function to calculateTotalCost or sumUpTotalCost.

</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/174#discussion_r825233057" expanded>

Please remove the extra line here, likewise for line 68
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/187#discussion_r825283974" expanded>

Perhaps add in another note where by the names must be already captured in the session. 
E.g. Session has Alice and bob, so an illegal entry would be activity /create ... /p Max /i Alice bob ....
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/189#discussion_r825291177" expanded>

Instead of giving example of "apple" maybe "Outing" would be better.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/192#discussion_r825302961" expanded>

Consider following the standard the group has set `Prepares user arguments for the creation of a &gt;Command Name> object.`
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/192#discussion_r825303684" expanded>

The new changes still does not fit our team's javadocs style, please follow `Prepares user argument for creation of ActivityDeleteCommand object`
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825552439" expanded>

Perhaps add a hyperlink reference for the `session /list` command. Similar to what we did for the TOC.
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825552605" expanded>

Similarly you can add hyperlink reference as well for `activity /list`.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825552724" expanded>

For the image link, please refer to other sections of the userguide to see how it is link.
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825552804" expanded>

Same for here as well, for the image reference link.
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825611166" expanded>

The explanation for activity_id at the moment has a small mistake, it should be The unique identifier for a "session", it should not be session, it should be activity.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/206#discussion_r825619677" expanded>

Perhaps checking if it was an InvalidCommand would be better? Since its missing delimiters, it must return an InvalidCommand. 
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/206#discussion_r825620258" expanded>

Same for here as well, you could check for InvalidCommand, as there is a returned object for you to check on line 50.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/248#discussion_r828654255" expanded>

Consider changing the function name to `prepare_hasMissingArguments_InvalidCommand`
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/248#discussion_r828655066" expanded>

Consider changing the function name to `prepare_hasMissingDelimiter_InvalidCommand`
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/248#discussion_r828655864" expanded>

Perhaps making it plural? with `hasMissingDelimiters`
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828717100" expanded>

Consider changing the `True` to `true` to reflect the correct boolean values. Same for the case of `False`, change it to `false`
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828717360" expanded>

Perhaps change this to `isGroupEmpty()` to make it more boolean sounding.
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828717728" expanded>

As mentioned above, change the boolean returns to lower case.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828718476" expanded>

Could rename this function to `getPersonCount` instead.
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/256#discussion_r828830380" expanded>

Perhaps shorten it to, "A session summary was not produced as the session with the following ID was not found: "
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/258#discussion_r828940680" expanded>

Perhaps you would want to change this to "Session was not found with unique identifier of: "
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/276#discussion_r829975866" expanded>

Perhaps you may want to create another message for GROUPCREATE instead of using SESSIONCREATE.
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/276#discussion_r829978135" expanded>

May want to align all the @param for standardization.
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/301#discussion_r831172264" expanded>

Consider adding a new line at the end of the file
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832981830" expanded>

Consider naming it as `MINIMUM_PADDING`
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832983199" expanded>

Perhaps you can change it to An integer that represents the location of the row item.
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832986324" expanded>

Perhaps you can change it to An integer that represents the row number.
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832986974" expanded>

Instead of `int` maybe use `integer` for standardization
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832987491" expanded>

Same for here where it should be `integer` to follow standardization
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832987812" expanded>

Same for here where it should be integer to follow standardization
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832988538" expanded>

Perhaps capitalizing the first letter from `a StringBuilder` to `A StringBuilder`
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832989023" expanded>

Same for here, should include the data type first before explaining what it does.
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r832989486" expanded>

Should change `An integer array` for standardization
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/326#discussion_r833220169" expanded>

Perhaps before explaining the command, you could add in `API reference: GroupListCommand` then it would link to the github repo of the file for GroupListCommand
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/325#discussion_r833358635" expanded>

Perhaps add a warning like how `session /delete` does it to warn the user that a delete is irreversible. 
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/325#discussion_r833359571" expanded>

Perhaps remove the extra space between group and .
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/339#discussion_r834361095" expanded>

Perhaps change it to this "If there is an existing group with the same group name."
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/339#discussion_r834362295" expanded>

Perhaps you could jump straight to saying " ... `GroupCreateCommand` class would create a new `Group` object ..."
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/339#discussion_r834363167" expanded>

Could include the word new for clearer explanation "...is called to store the new Group object.." 
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/339#discussion_r834364332" expanded>

Should be stored in `Profile` class. But can simply omit this part and just have "The `GroupCreateCommand` class prints a message indicating that a group has been successfully created."
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/330#discussion_r835670105" expanded>

Perhaps removing this if its not used, because on line 71 you called in directly.
Also for line 63, you may want to consider removing it and updating line 66 to directly call too. 
However, if you wish to persist with the current implementation please standardize line 66 and 71.
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/330#discussion_r835670221" expanded>

Perhaps add a javadocs explaining what this function does?
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/352#discussion_r835743187" expanded>

May want to remove this extra line of logging as it seems to be in the wrong class file
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838041323" expanded>

Should change `session /view ` not `session /create`
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838042946" expanded>

The reference is not the correct reference. 
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841152643" expanded>

Perhaps you may want to add layer of check where by if the user supplies exactly the same arguments and fields, it would print out "no edits were made"
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841153353" expanded>

Perhaps move this function all the way to the bottom for standardization
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841153801" expanded>

Perhaps using the constant you have defined earlier to check , rather than using `-1`
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841154506" expanded>

Perhaps renaming this to `An ArrayList object of Person objects.`
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/465#discussion_r844708473" expanded>

Consider adding the PR link to support this
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846639278" expanded>

Perhaps parsing in the group list itself, instead of manager
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/477#discussion_r846708413" expanded>

Perhaps adding the word class at ... while the `Storage` class helps to ...
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/482#discussion_r846713698" expanded>

Perhaps put ActivityEditCommand in code blocks
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/482#discussion_r846713883" expanded>

Perhaps use ...all dummy activity unique identifiers ... instead?
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846893365" expanded>

Perhaps use `equalsIgnoreCase` here instead
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846893422" expanded>

Perhaps remove this if condition if there is no by-product.
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846893548" expanded>

You should add a return statement here after printing the error message. As the command should not go through if any checks fail.
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846894247" expanded>

Perhaps just returning false immediately and omit the variable.
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846894480" expanded>

Same for here as well, you just return immediately. Another suggestion is to move this check up first as this check is less resource intensive and if its different, this check would immediately return false.
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846895022" expanded>

Perhaps you could create a constant in GroupEditCommand to store this message and rename it to `COMMAND_NO_EDITS_MADE`. Because it's technically not an error.
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/50#discussion_r819325527" expanded>

It is going to be a TextUI object, however the specific purpose for the `@param ui` has yet to be defined.
For now, we can give a generic meaning for the `@param ui` as we have yet to implement the run function. 
Once the run function gets implemented, the javadocs would be refined accordingly to the spec of the function. 
</panel>

<panel  header="**70 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/12#issuecomment-1058422539" expanded>

Pull request failed checks were resolved in PR #15
</panel>

<panel  header="**71 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/11#issuecomment-1058422940" expanded>

Pull request failed checks were resolved in PR #15
</panel>

<panel  header="**72 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/13#issuecomment-1058424024" expanded>

Pull request failed checks were resolved in PR #15
</panel>

<panel  header="**73 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/51#issuecomment-1059237221" expanded>

Removed exception checks in #58
</panel>

<panel  header="**74 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/14#issuecomment-1064829342" expanded>

SessionCreateCommand is done, hence fulfilling this user story.

Last pull request: #133
</panel>

<panel  header="**75 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/98#issuecomment-1064830720" expanded>

SessionCreateCommand is done, hence fulfilling this user story.

Last pull request: #133
</panel>

<panel  header="**76 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/97#issuecomment-1064830798" expanded>

SessionCreateCommand is done, hence fulfilling this user story.

Last pull request: #133
</panel>

<panel  header="**77 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/104#issuecomment-1064831414" expanded>

ExitCommand is done, hence fulfilling this user story.

Last pull request: #81 
</panel>

<panel  header="**78 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/73#issuecomment-1064831805" expanded>

SessionDeleteCommand is done, hence fulfilling this user story.

Last pull request: #155
</panel>

<panel  header="**79 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/21#issuecomment-1064983660" expanded>

SessionListCommand is done, hence fulfilling this user story.

Last pull request: #161
</panel>

<panel  header="**80 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/17#issuecomment-1066503411" expanded>

ActivityViewCommand is done, hence fulfilling this user story.

Last pull request: #171
</panel>

<panel  header="**81 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/100#issuecomment-1066504604" expanded>

SessionSummaryCommand is done, hence fulfilling this user story.

Last pull request: #181
</panel>

<panel  header="**82 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/93#issuecomment-1066507044" expanded>

HelpCommand is done, hence fulfilling this user story.

Last pull request: #210
</panel>

</panel>


<panel type="info" header="### 7. MU C..GRUI `@Ch40gRv1-Mu` (68 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#discussion_r821272618" expanded>

Declaration is suggested to be in alphabetic order, we can change this later
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#discussion_r821273576" expanded>

Java library class should be imported before the custom class
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#discussion_r821274579" expanded>

I suggest to set the result of adding task within the switch structure(e.g. line 31). Otherwise, it's hard to make the result for adding module later
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#discussion_r821276562" expanded>

Delete the empty line?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#discussion_r821286159" expanded>

I suggest to put the execution of Command in execute method instead of constructor. In case we want to re-use the commands later
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#discussion_r821286770" expanded>

ListCommand is not in charge of interacting with users, which is ui's job. It's suggested to set the result in the commandResult and let ui do its job, instead of println here. For example, if we wanna change the ui style later, we have to review all these println in commands, which is hard to modify
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#discussion_r821287002" expanded>

I suggest to put the execution of command in the execute method instead of in the constructor
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822340917" expanded>

No command parser given for EXIT_COMMAND_WORD. Also, because not all commands need parser actually. For example, exit and help may tasks no parameters. In this case, a wrapper parser doing nothing seems meaningless. May consider. I suggest to put the switch in the  "parseCommand(String userInput)" and use parser whenever needed in certain case. For example. when it's figured as the "add", which needs parser, and you can just use the AddParser() in that particular case.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822341804" expanded>

The Parser class is an abstract class, which means it does not serve for parse the command key words particularly, e.g. ("add", "exit"). Instead it serves as a util for all possible parser works. Hence I suggest to put the enums for command words in the ModHappyParser
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822343127" expanded>

Displays
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822348477" expanded>

The original format already support the mod. May I check why it is changed?
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822349766" expanded>

May I know why is my original test deleted? The ParserTest.java is used to test the Parser class and I put my test of the regex here. Also, I notice that you add some tests for ModHappyParser(), how about putting these in ModHappyParserTest?
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822396543" expanded>

Okk, thanks
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823249693" expanded>

Suggest to make an overload constructor for task with no estimated working time.
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823254389" expanded>

Suggest to use a switch to make it looks easier. Also avoid use magic variables such as null, true here. for the taskDescription, I suggest to pass the original taskDescription directly. For the isTask boolean, I suggest to make a method to judge.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823254578" expanded>

The save as the previous comments
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823254779" expanded>

Suggest to add overload constructor here
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823270311" expanded>

Ok, for the null value of taskDescription, a possible way is to change the default character for missing arguments as null in Parser.java. Then no need to do the EMPTY_STRING check here
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823255106" expanded>

The same suggestions as that in the addParser part
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823349687" expanded>

I understood the concern about discussing with Hee Kit. Because both description and working time are optional here, and currently both are string, a construction in form of Task(String taskName, String parameter2) cannot differentiate the whether parameter2 refers to taskDescription or estimatedWorkingTime. We decide to keep it unchanged temporarily and make an issue about the order constraint of "-t" and "-d". Later when we make a distinct class for the time, we can apply overloading constructor to differentiate this.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825952142" expanded>

Import the java class before the custom class
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825962832" expanded>

Comparing with the original constructor, this confuses me a little bit. If we view the data type signature of the two constructor, one is AddCommand(String, String) and the other is AddCommand(String, String, String). However the first one is to add task while the second is to add module. This throw the decision of types to outsider classes, and seems less abstract and encapsulated.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825964119" expanded>

Suggest to import java lib class before the custom class
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825965201" expanded>

Just curious, is the moduleCode here the same to the moduleName in the AddCommand.java?
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/84#discussion_r825975950" expanded>

I support Yikai's point of view. Put the enums to a distinct class can keep the TextUI compact. 
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r826100583" expanded>

okk
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#discussion_r826734734" expanded>

I just share how netwox does. When enter the help, it only shows the information about compulsory parameter, and when enter the compulsory followed by -h or --help, it will show the optional parameters. 
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826736275" expanded>

import java lib class before custom class
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826743374" expanded>

 I remember there is no need to do the nested clear for java, because java has JGC, any un-referenced object will be recycled(e.g. here each modules and taskList in the modules). So moduleList.clear() will achieve the same effort as the nested loop?
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826743884" expanded>

As previous comments suggested.
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826831337" expanded>

Great!
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#discussion_r826873442" expanded>

For example, the if user enter “help”, it will show the just compulsory parameters. But when enter “help add” it will show detailed help for add including the optional parameters. But this may need a parser for help command, and I am not sure if it’s too complex for V1.0, because the parameters may change frequently later. 
Maybe can give a brief at the beginning to introduce the format of orders e.g indicate that the parameter in bracket is optional? Just my suggestion, you can decide the way it displays as long as it’s clear.
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#discussion_r827080992" expanded>

Pretty decent implementation, I will merge it at 11:30.
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831778545" expanded>

The Main class keeps a reference of the ModuleList class, so would it be better to use navigability instead of dependency here?
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831783986" expanded>

The multiplicity here is a little bit ambiguous, cannot differentiate whether it's for  Module or ModuleList, would it be better to use "-->" instead"?
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831786267" expanded>

Should this be "1..*" instead?
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831787184" expanded>

Will ModuleList have navigability on TaskList?
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831808287" expanded>

Should here be navigability instead because Main holds a reference of ModHappyParser?
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r831881558" expanded>

I am not sure whether the Module Object can be omitted here according to the web.
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r831882251" expanded>

Same as add
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r831883360" expanded>

The TagCommand will return a CommandResult Object, so should call the constructor of CommandResult before end?
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r831890856" expanded>

Did you forget a return here? I think it will return the taskModule:Module if the returned is not null?
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r831892341" expanded>

would "String" be better?
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r831898208" expanded>

Same as before, I suggest to reflect the CommandResult
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r832175181" expanded>

Yep, I suggest so. The reason is that later it will automatically update when you change the puml file
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#discussion_r833109560" expanded>

I may support Yongsheng's point of view. The reason is that all interactive I/O(ui) is done by the ui held by Main, which means the UI cannot be a independent component out of Main? (The System.out is just a API called by PrintSream Object but not PrintSream Object itself, if we wanna make a GUI can directly change the System.out to other output format and our App will still run as expected)
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834550515" expanded>

Should this be better demonstrated with a sequence diagram?
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834555533" expanded>

I remember you commented that the architecture part should keep in a bit more high level? Then why modified this back?
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834558028" expanded>

Should this be GpaCommand instead if it's surrounded by ``
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834562245" expanded>

Great improvement!
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834566271" expanded>

I don't think we should delete the list of group names and the explanations, otherwise, users may not understand what each group means clearly
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834568471" expanded>

Checks the comments for HelpCommand
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834861765" expanded>

But our previous plan is to put these information in the implementation section, right?
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834862902" expanded>

okk, cuz I felt it more meaningful to surround it with `` only if the "word" is some name exactly in our code or in any specific rule.
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841229491" expanded>

Does this mean that the size of tasks in list will not be shown?
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841230264" expanded>

I suggest change the magic logic here, at least add comments explaining what taskIndex &gt; 0 mean
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841233190" expanded>

Also the EditCommand remains unchanged. https://github.com/ngys117/tp/blob/282df85449c6c823bfcc5de7da3ce1e1108924d7/src/main/java/seedu/duke/commands/EditCommand.java#L105-L107
<img width="928" alt="Screen Shot 2022-04-03 at 10 48 11 PM" src="https://user-images.githubusercontent.com/78465180/161433663-94fa1a80-adfb-4664-886f-bdb6a43839eb.png">


</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/175#discussion_r844069911" expanded>

After discussing with Yikai, I will put the logic, together with the loading logic in Main class to a static class to keep the ModuleList class simple.
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844565267" expanded>

This fix the issue [#177](https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/177)
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844566609" expanded>

Same suggestion as in ModHappyParser
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844566481" expanded>

I suggest to put the logic to AddParser, and let AddParser to decide whether it's module or task to keep ModHappyParser in consistent logical level. (May let AddParser decide whether return AddTaskParser or AddModuleParser to ModHappyParser)
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/183#discussion_r846563630" expanded>

I suggest keep the comments.
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/183#discussion_r846563736" expanded>

If both are private static final,  should we still declare it repeatedly? How about just use the constant directly.
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/183#discussion_r846563790" expanded>

Same as before, suggests leaves comments explaining the magic logic.
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/183#discussion_r846563838" expanded>

I suggest just use the constants from StringConstants directly without repeated declaration.
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/196#discussion_r846692223" expanded>

"Task list" :)
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/196#discussion_r846692442" expanded>

Suggests to modify the method name to getModuleTaskList or moduleTaskListToString, or something similar, because I don't think it prints here. 
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/196#discussion_r846692552" expanded>

This is not for this PR specificly, but just a small suggestion.
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#discussion_r820346163" expanded>

Hi, may I check how the face look in your side, because it works from my side... How about I just remove all the faces first?
</panel>

<panel  header="**70 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/91#discussion_r827577794" expanded>

okk
</panel>

<panel  header="**71 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/91#discussion_r827581490" expanded>

Updated
</panel>

<panel  header="**72 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830769178" expanded>

Currently the new value is not boolean type, but String instead. But we need to define the legal value set to avoid unpredictable behaviors
</panel>

<panel  header="**73 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830936085" expanded>

Good suggestion, updates the OptionParser to support both GroupWord and GroupNumber
</panel>

<panel  header="**74 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830936225" expanded>

Resolved
</panel>

<panel  header="**75 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830936424" expanded>

Modified
</panel>

<panel  header="**76 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830936615" expanded>

Modified
</panel>

<panel  header="**77 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830936707" expanded>

Modified
</panel>

<panel  header="**78 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830936850" expanded>

Modified as suggests
</panel>

<panel  header="**79 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833375156" expanded>

The url shall be changed later
</panel>

<panel  header="**80 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833861065" expanded>

ok

</panel>

<panel  header="**81 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833880494" expanded>

Updated, I merged the description of the detailed classes to make it more general.
</panel>

<panel  header="**82 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833881508" expanded>

For the sequence diagram: we decide to make it in the implementation part describing the lifeline of parsers. 
</panel>

<panel  header="**83 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833881848" expanded>

You are right we XYZParser don't have sub-parser now. Thanks for point this out.
</panel>

<panel  header="**84 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/124#discussion_r838425859" expanded>

Okk
</panel>

<panel  header="**85 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/124#discussion_r838435877" expanded>

okk
</panel>

<panel  header="**86 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/124#discussion_r838435682" expanded>

Yep, I plan to refactoring the Parser for commands later. Hence don't want this part to be affected later.
</panel>

<panel  header="**87 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/118#discussion_r838479709" expanded>

Sorry, it's confusing expression. Changed already
</panel>

<panel  header="**88 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/118#discussion_r838481741" expanded>

This problem will be fixed by latter pr #121 by heekit.
</panel>

<panel  header="**89 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841589479" expanded>

We don't have enough space here for the additional column. With referring to ab3, I put the example code under the format(discussed with Hee Kit already)
</panel>

<panel  header="**90 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841592621" expanded>

For the extra subsection, I am thinking whether it would make the section number too complex
<img width="572" alt="Screen Shot 2022-04-04 at 6 31 38 PM" src="https://user-images.githubusercontent.com/78465180/161526228-23812be7-d7ca-4d38-943b-548716fd047e.png">
For example, here the 4.1.1 would just follows 4.1, which would just follow 4.
</panel>

<panel  header="**91 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845645737" expanded>

Updated as suggested


</panel>

<panel  header="**92 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845645775" expanded>

Updated as suggested

</panel>

<panel  header="**93 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845645796" expanded>

Updated as suggested
</panel>

<panel  header="**94 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845733929" expanded>

This is resulted from version conflicts. Solved
</panel>

<panel  header="**95 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/8#issuecomment-1059900128" expanded>

Add Issue: As a user I can add a deadline
</panel>

<panel  header="**96 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/8#issuecomment-1059901125" expanded>

duplicated
</panel>

<panel  header="**97 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/90#issuecomment-1067747047" expanded>

LGTM, will merge at 17:40, 15/03 if no one else has comments
</panel>

<panel  header="**98 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/170#issuecomment-1086764690" expanded>

May consider refactoring the parser to a tokenizer, or split some large parsers(e.g. AddParser) into sub-parsers to provide more concise error tracking
</panel>

<panel  header="**99 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/168#issuecomment-1086766763" expanded>

The direct reason for this bug is the remain-catched exception in the  editModuleDescription in the EditCommand:
<img width="1072" alt="Screen Shot 2022-04-03 at 11 06 41 AM" src="https://user-images.githubusercontent.com/78465180/161409545-f703ee38-1956-4b0e-a387-181606e815d4.png">
https://github.com/AY2122S2-CS2113T-T10-3/tp/blob/15a7dfad694b94f1061725932c4a88a6e4112bab/src/main/java/seedu/duke/commands/EditCommand.java#L104-L108
I also suggest to refactoring the logic of execute of EditCommand. The condition "(taskIndex < 0)" is actually a magic number, which also confuses ourselves. See below:
https://github.com/AY2122S2-CS2113T-T10-3/tp/blob/15a7dfad694b94f1061725932c4a88a6e4112bab/src/main/java/seedu/duke/commands/EditCommand.java#L90-L96
</panel>

<panel  header="**100 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/165#issuecomment-1086767393" expanded>

The bug come from the un-catched exception in editTaskFromModule in EditCommand.
<img width="1362" alt="Screen Shot 2022-04-03 at 11 11 15 AM" src="https://user-images.githubusercontent.com/78465180/161409669-b2906897-b981-4332-80cc-61d3020f0040.png">
https://github.com/AY2122S2-CS2113T-T10-3/tp/blob/15a7dfad694b94f1061725932c4a88a6e4112bab/src/main/java/seedu/duke/commands/EditCommand.java#L115-L138
I think we should check other part of the code also. Especially the part that calls external/java functions and make sure all of them all in try...catch loop.
</panel>

<panel  header="**101 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/167#issuecomment-1086768052" expanded>

Not sure why this happens, it tests well on my side.
<img width="1008" alt="Screen Shot 2022-04-03 at 11 20 11 AM" src="https://user-images.githubusercontent.com/78465180/161409870-511bd045-0284-4e40-b583-6ecb48bf5863.png">


</panel>

<panel  header="**102 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/153#issuecomment-1086769301" expanded>

I think change the words in documentation to ""Any positive number less or equal to one billion (1000000000)" can fix this. As I set the bound as inclusive, it does not add value to change the code. 
</panel>

<panel  header="**103 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/152#issuecomment-1086769531" expanded>

Actually, I think this should be allowed? Our future user story contains the recursive task, where the tasks may have the same description but distinct durations.(e.g. some tutorial may be shorter than normal)
</panel>

<panel  header="**104 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/149#issuecomment-1086769739" expanded>

The same problem as edit, the un-catched exception and magic logic of execute.
</panel>

<panel  header="**105 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/147#issuecomment-1086770120" expanded>

Didn't get why this happens, because it tests good from my side. May remove the targeting file before storing in the Storage to avoid possible influence from the existing file. (My machine is Intel Mac btw.)
<img width="569" alt="Screen Shot 2022-04-03 at 11 41 12 AM" src="https://user-images.githubusercontent.com/78465180/161410350-564e9e93-86a2-4c76-b3e8-a9557b2b6be6.png">

</panel>

<panel  header="**106 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/146#issuecomment-1086770372" expanded>

This works well from my side, and I guess the possible reason is that the test typed in 2 extra "\n". If so, may modify the ModHappyParser to void the empty "\n".
<img width="519" alt="Screen Shot 2022-04-03 at 11 45 25 AM" src="https://user-images.githubusercontent.com/78465180/161410420-cd6069f9-1dc7-4053-881d-ec71b7fe21d4.png">

</panel>

<panel  header="**107 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/145#issuecomment-1086770706" expanded>

Actually the module codes are case-sensitive.  So the is similar to [issue #165 ](https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/165#issuecomment-1086767393)
</panel>

<panel  header="**108 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/145#issuecomment-1086770796" expanded>

I am wondering whether we can make the  module codes case-insensitive because it's more convenient and case-sensitive doesn't really make sense for module code actually.
</panel>

<panel  header="**109 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/143#issuecomment-1086770962" expanded>

See [issue #165](https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/165#issue-1189950413)
</panel>

<panel  header="**110 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/142#issuecomment-1086771008" expanded>

See [issue #165](https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/165#issue-1189950413)
</panel>

<panel  header="**111 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/141#issuecomment-1086771043" expanded>

See [Issue #165](https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/165#issue-1189950413)
</panel>

<panel  header="**112 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/139#issuecomment-1086771481" expanded>

This is because the Regex for module code only consider "\w", which is [0-9a-zA-Z_], as below
https://github.com/AY2122S2-CS2113T-T10-3/tp/blob/15a7dfad694b94f1061725932c4a88a6e4112bab/src/main/java/seedu/duke/parsers/AddParser.java#L56
But it's possible that the Module code containing other symbles. For example [MIT 6.006](https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb).
But if you think it's just for NUS module, I didn't find exception out of "\w" actually
</panel>

<panel  header="**113 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/177#issuecomment-1091600029" expanded>

Issue fixed by [#176](https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176)
</panel>

<panel  header="**114 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/191#issuecomment-1093803034" expanded>

LGTM
</panel>

</panel>


<panel type="info" header="### 8. TAN ..IVAN `@ivanaitzliddat` (56 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/109#discussion_r820249692" expanded>

Perhaps could add a new line at line 57
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/155#discussion_r824337917" expanded>

Perhaps can remove "this." so that we only use "this." for constructors, getters and setters
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/155#discussion_r824337975" expanded>

Same as above, possible to remove "this."
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/170#discussion_r824937667" expanded>

Perhaps can change sessionsToBePrinted to sessionToBePrinted since it is only referring to 1 session object
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/170#discussion_r824939657" expanded>

Possible to use 8 spaces instead of 4 to follow coding standards
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/170#discussion_r824939701" expanded>

Possible to use "An" ActivityListCommand object instead of "A" ActivityListCommand object
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/204#discussion_r825609311" expanded>

Possible to add the > symbol in front of the sentence "Activities are a way ..."
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/227#discussion_r827670313" expanded>

Possible to change this to "Checks if session unique identifier is incremented when a session fails to be created because another session with the same name already exists" or something along that line.

"if session is created" seems to suggest that a session did indeed get created
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/227#discussion_r827670928" expanded>

Possible to change to "Checks if session unique identifier is incremented if a session fails to be created due to duplicate names in person list"
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/248#discussion_r828572418" expanded>

Missing delimiter refers to "/sid" while missing argument probably refers to "1".

Therefore, possibly swap the variable names for the two cases. 

Also, maybe it is possible to change the name to inputMissingArguments and inputMissingSidDelimiter since argsMissingArgument may sound a little weird. 
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/248#discussion_r828576298" expanded>

With regards to the other comment, can possibly split the two cases into two different methods. 
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/252#discussion_r828783822" expanded>

Possible to change this to "Checks if an exception is properly thrown when a Session object with a specified session unique identifier is not found."
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/252#discussion_r828784048" expanded>

Possible to change this to "Checks if an exception is properly thrown when a Session object with a specified session unique identifier is found."
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/252#discussion_r828785829" expanded>

Possible to change this to "Checks if method returns false when a Session object with a specified session unique identifier is not found."
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/252#discussion_r828786403" expanded>

Possible to change this to "Checks if method returns true when a Session object with a specified session unique identifier is found."
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/252#discussion_r828786513" expanded>

Possible to change this to "Checks if method returns false when a Session object with a specified session name is not found."
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/252#discussion_r828786612" expanded>

Possible to change this to "Checks if method returns true when a Session object with a specified session name is found."
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/264#discussion_r829641338" expanded>

Possible for this to be "Test values larger than 100"
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/264#discussion_r829643983" expanded>

Same comment as above
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/268#discussion_r829647463" expanded>

Possible to put "false otherwise" on a new line
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/268#discussion_r829647514" expanded>

Same comment as above
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/268#discussion_r829649831" expanded>

Possible to change this to "Returns a Group object with a group unique identifier specified by the user."
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/268#discussion_r829650878" expanded>

Possible to add a new line between the Javadoc comment and the return statement
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/268#discussion_r829651219" expanded>

Is this suppose to be groupList?
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/278#discussion_r830430846" expanded>

Perhaps can be made clearer by using "Checks if session is not deleted ..."
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/276#discussion_r830431341" expanded>

Possible to put "false otherwise" on a newline and aligned it with "true if ..."
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/314#discussion_r832851397" expanded>

Possible to use "an" instead of "a"
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/314#discussion_r832851444" expanded>

Possible to use "an" instead of "a"
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/314#discussion_r832851618" expanded>

Possible to use "an" instead of "a"
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/314#discussion_r832851873" expanded>

Possible to use "an" instead of "a"
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/314#discussion_r832851893" expanded>

Possible to use "an" instead of "a"
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/314#discussion_r832852035" expanded>

Perhaps, if we want to standardize, can use "one" instead of "1"
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/314#discussion_r832852297" expanded>

Possible to help change these as well to follow overall standardization
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/325#discussion_r833390104" expanded>

Perhaps can change this to "Example" instead of "Examples"
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r838061740" expanded>

Possible to choose either "run" or "call" rather than both "run call"
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/375#discussion_r838065857" expanded>

For this if else portion, can perhaps refer to group /list to follow overall standardization by using additional pointers
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/386#discussion_r838108458" expanded>

Possible to change to consists
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/386#discussion_r838109556" expanded>

Possible to remove "be"
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/386#discussion_r838110299" expanded>

Possible to add a comma at the end of this line
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838737045" expanded>

Perhaps can rephrase it as "a message indicating that another session with the same name exists is printed..."
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838737941" expanded>

Possible to add `TextUi#printlnMessage` or similar methods
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838739238" expanded>

Perhaps can change each group to each session
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r840535980" expanded>

Perhaps can change "here" to "implementation section" or maybe "please refer here"
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/433#discussion_r841374530" expanded>

perhaps can follow the rest of the javadoc formatting
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/434#discussion_r841375439" expanded>

Perhaps might want to change the author name here to yourself
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841378660" expanded>

Should costList be private?
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841381553" expanded>

Personally, I would prefer if this is extracted to prevent the deep nesting, but if you think it is not possible then I guess it is fine
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/441#discussion_r842440555" expanded>

Consider removing extra new line
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/441#discussion_r842441887" expanded>

Possible to put these two together as groupSuccessfullyCreated
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/441#discussion_r842444687" expanded>

Can also do so for the other tests (Can refer to activity create command test)
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/441#discussion_r842445359" expanded>

Good check, I will add this to activity delete as well
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/464#discussion_r844702560" expanded>

Consider capitalising FAQ
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846716790" expanded>

Perhaps can shift the comma to the first String
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846717198" expanded>

Possible to remove extra \n to prevent printing additional new line
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/478#discussion_r846717842" expanded>

Perhaps, can change the logic here to make sure that the logic is as such:

- check if same person list
- check if same name
- if same name and same person list —> print error and return
- else update whichever is changed

</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/484#discussion_r846768615" expanded>

Possible to make session plural
</panel>

<panel  header="**57 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/53#issuecomment-1059374479" expanded>

Closed by #55 
</panel>

<panel  header="**58 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/78#issuecomment-1059738466" expanded>

Closed by #79 
</panel>

<panel  header="**59 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/376#issuecomment-1081919344" expanded>

Closed by #330 
</panel>

<panel  header="**60 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/377#issuecomment-1081931723" expanded>

Closed by #356 
</panel>

<panel  header="**61 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/322#issuecomment-1091077336" expanded>

Closed by #380 
</panel>

<panel  header="**62 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/240#issuecomment-1091077666" expanded>

Closed by #271 
</panel>

<panel  header="**63 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/323#issuecomment-1091077851" expanded>

Closed by #397 
</panel>

<panel  header="**64 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/324#issuecomment-1091078042" expanded>

Closed by #397 
</panel>

</panel>


<panel type="info" header="### 9. SAUR..ERIL `@matheril` (52 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/37#discussion_r819279916" expanded>

Minor change but consider adding a newline to the end.
Looks good to merge otherwise
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/50#discussion_r819322777" expanded>

Since @param profile specifies that it is a Profile object, should @param ui also specify that it is a TextUI object? Or should we leave this ambiguous in case we want to use this function with a ui that is not a TextUI object?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/50#discussion_r819326090" expanded>

Sounds good. LGTM
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/60#discussion_r819663161" expanded>

Could be more concise, such as "Command that creates and stores a Session in a Profile object."
I think it is somewhat clear from the class name that this is a Command, so it could be shortened to just "Creates a Session and stores it in a Profile object" or "Creates a Session from user input and stores it in a Profile object".
Minor but we can use this documentation as a template for all future commands.
Otherwise, looks good to merge 
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/112#discussion_r820261316" expanded>

Capitalise 'p' to match the other javadocs and make it clear that Person is a class
Look good to merge otherwise
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/181#discussion_r825267171" expanded>

Consider changing these to private
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828722255" expanded>

getName() returns a String. Comparing Strings should be done with .equals(), not ==, as == would compare their references which is probably not the intended behaviour.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828722588" expanded>

Consider changing == to .equals() to compare Strings by value instead of reference (same issue as previous)
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/251#discussion_r828766843" expanded>

Would it be better to shorten this method to:


```
public void removePerson(Person person) throws InvalidDataException {

    if (personList.isEmpty()) {

        throw new InvalidDataException(Message.ERROR_GROUP_EMPTY_PERSON_LIST);

    }

    for (Person personInGroup : personList) {

        if (personInGroup.getName().equals(person.getName())) {

            personList.remove(personInGroup);

            return;

        }

        // if loop completes without removing any persons

        throw new InvalidDataException(Message.ERROR_GROUP_PERSON_NOT_IN_LIST);

    }

```

I think this should work the same way with fewer lines of code but please double-check to be sure.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/347#discussion_r835725758" expanded>

Minor, but consider changing this to "models the interactions between various entities in SplitLah" to emphasize that there are several interactions happening between several entities, and also because the word "system" is a bit vague and might imply that there are interactions happening outside SplitLah.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/386#discussion_r838154468" expanded>

Past tense is okay when referring to a previous step. e.g.

"4. All relevant arguments that were parsed are then used to create a new `XYZCommand `object which is
   then returned to the `Parser` class.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/386#discussion_r838153708" expanded>

Consider changing these steps to present tense, as currently they switch between present and future.

e.g. "1. When required to parse for a command, the running `SplitLah` object passes a String object containing user input to the `Parser` class."
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/380#discussion_r838234678" expanded>

add the word "the" after "runs"
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/380#discussion_r838235194" expanded>

Perhaps change string to `String` object to standardize with the rest of the DG?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/380#discussion_r838237382" expanded>

It might not be necessary to say that control is returned to SplitLah since this being the last step implies that the method returns after this.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838693769" expanded>

The "a" might be unnecessary here, since other lines don't have it.
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838694581" expanded>

Include a "The" at the start and change "create" to "creates".
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838696114" expanded>

Add "the" at the start
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838700060" expanded>

maybe change this to a generic error message instead of "session could not be found"?
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/390#discussion_r838700714" expanded>

This line should probably be rephrased, it doesn't sound right.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838738020" expanded>

Consider changing this to "There are three editable fields: " (use a colon instead of a comma) (or use the numeral 3 instead of "three" to be consistent since the rest of the guide uses numerals)
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838739189" expanded>

Capitalise the "C" in "Charlie".
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838739521" expanded>

Capitalise the "C" in "Charlie".
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838740378" expanded>

add a "the" before `session /list`
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838742753" expanded>

Does SplitLah still have the confirmation prompt for this command?
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838744801" expanded>

Maybe rephrase this to:

"A group represents one or more individuals. Several commands use groups to quickly identify to a group of individual persons without having to manually enter their details one by one." or something similar.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838745196" expanded>

The word "have" is missing in "you do not [have] to always..."
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838745736" expanded>

typo in the word "group"
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838746092" expanded>

Consider replacing the comma with a colon, like so:
"There are 2 editable fields: group name..."
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838747355" expanded>

Maybe rephrase to:

"This action is irreversible. The group is edited immediately after entering this command." to remove the awkward comma and future tense. The second sentence is also somewhat optional but can be left in for clarity.

Also applies to other uses of this phrase across the UG.
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838747611" expanded>

Capitalise "c" in "Charlie"
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838748076" expanded>

Add a "the" before naming the command.
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/391#discussion_r838749001" expanded>

Consider replacing "so that you can get assistance..." to "to help you use SplitLah" as it means the same thing but is less wordy.
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r839415497" expanded>

Consider changing "could" to "can"
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r839416124" expanded>

The question mark at the end is unnecessary. Consider removing it.
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r839427259" expanded>

Consider rewording this section to:
SplitLah is divided into eight main components: Manager, Profile, TextUI... (consider making each one a subpoint with deeper indentation)
Each component has its own section in this guide explaining them in detail.
This [diagram] shows the inner workings of how each component interacts with each other.
Splitlah supports a total of 18 commands. However, the `help` and `exit` commands will not be explained in detail. (Consider if saying "we" is necessary here; not sure. It's also fine to remove the sentence about help and exit as this sentence isn't really that important for the reader to know).
Please refer to the [userguide] to find out how to use each command.
Please refer to the [implementation section] to find out how each command is designed and implemented in SplitLah.
Each command's section in this guide contains an API reference link that brings you to the main source code responsible for executing the command.



</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r839445714" expanded>

Consider rewording this to (formatting is scuffed here, but should give a rough idea of the indentation)
The `Storage` class is initialized (Might want to standardize UK/US spelling) by the `Manager` class when the application starts.
Upon initialization, the `Storage` class checks if a save file already exists. A save file records user data related to SplitLah even after the application is closed.
 * If a save file is found, the `Storage` class loads data from it into the `Profile` object managed by the `Manager` object (I believe Manager is instantiated so object might be better to say than class. The first point already says "when the application starts" so I don't think it's necessary to emphasize that SplitLah is running).
 * Else, a new save file is created and an empty `Profile` object is created instead. (standardise object/instance)

Only commands that update attributes of the `Profile` object also ensure that the save file is updated to record these changes. They are:
*  create
*  delete
*  edit

Once the command finishes executing, `Manager#saveProfile` is called to update the save file.

*  For example: 
   *      The user enters `group /create /n Highschool Friends /pl Alice Bob`. 
   *      SplitLah recognises this as a `GroupCreateCommand` and creates a new group accordingly.
   *      As this updates the list of groups stored in the `Profile` object, `Manager#saveProfile` is called to update the save file with the newly created group.

All classes associated (not sure if there's a better word to replace "under" that more clearly describes the relationship between these classes?) the `Profile` component implement the `Serializable` class. This allows the `Storage` class to write into the save file without having to pre-process the data.

  
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/403#discussion_r839448239" expanded>

Try to reword this section to present tense
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/400#discussion_r839246637" expanded>

Consider changing this to "It also keeps track of"
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/400#discussion_r839248403" expanded>

"further" might be unnecessary here
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/400#discussion_r839248811" expanded>

"simply" might be unnecessary here
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/429#discussion_r841038100" expanded>

Consider changing "has" to "have, or changing "has to be included" to "must be included" to make it seem more imperative and concise.
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/429#discussion_r841041167" expanded>

The phrase "may seem to have occurred" seems vague and passive. Consider replacing it with "may occur". Or rephrase the sentence to:

"All values displayed are rounded off to 2 decimal places." The phrase "rounded off" already implies that inaccuracies may result, but you could modify this to "All values displayed are rounded off to 2 decimal places. This may result in slight inaccuracies." to reiterate this to the user.
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/429#discussion_r841041524" expanded>

Consider changing "benefit" to "purpose" to make the language seem more objective.
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/429#discussion_r841044798" expanded>

This seems vague. "improve user experience" is an umbrella term, so consider narrowing this down to the specific part of the user experience that is improved. Consider:
"Groups help you spend less time adding the same people to multiple sessions". Alternatively, you could just remove this line.
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/429#discussion_r841038437" expanded>

It might be slightly misleading to say "including the group that was declared..." as the edit command does not take in a group name as an argument. Perhaps rephrase this to "including those part of the group declared when creating the session must be included."
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/460#discussion_r844089591" expanded>

Consider changing "would check" to "checks" as future tense doesn't seem necessary here.
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/460#discussion_r844091597" expanded>

Consider changing "would be printed" to "is printed".
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/460#discussion_r844091989" expanded>

Consider changing "would call" to "calls".
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/460#discussion_r844092365" expanded>

This line is missing a full stop at the end.
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/460#discussion_r844099752" expanded>

Minor, but consider splitting this line into two bullet points: one for each command. Maybe something like

The interactions of GroupCreateCommand with `Profile` and `Storage` classes are identical but the key differences lie in the arguments being parsed:

- `GroupCreateCommand` parses only the name and list of persons. It then creates a new `Group` object and adds it to the list of groups managed by the `Profile` class.
- `SessionCreateCommand` parses the x, y, z.... It then creates a new .... and stores it in .....

But you can choose not to do this if it seems overly repetitive. In that case, do try to split the sentence up into two like the first bullet point to make it easier to follow.

</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/460#discussion_r844862592" expanded>

Consider capitalising the P in `parser`.
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/34#discussion_r818729288" expanded>

Resolved, thanks
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/51#discussion_r819383039" expanded>

Resolved
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/51#discussion_r819383076" expanded>

Resolved
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/55#discussion_r819622808" expanded>

Resolved
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/55#discussion_r819624048" expanded>

Resolved
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/109#discussion_r820251382" expanded>

Makes sense for readability but having to iterate through the list twice is a bit less efficient, so I will leave this unchanged for now.
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/109#discussion_r820251539" expanded>

Resolved
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/117#discussion_r820669188" expanded>

Resolved
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/117#discussion_r820669341" expanded>

Resolved
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/129#discussion_r821478250" expanded>

Resolved by removing this method
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/129#discussion_r821478925" expanded>

Resolved
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/129#discussion_r821496618" expanded>

Resolved
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/179#discussion_r825254723" expanded>

Resolved
</panel>

<panel  header="**66 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/179#discussion_r825254961" expanded>

Resolved
</panel>

<panel  header="**67 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/179#discussion_r825255062" expanded>

Since true is a boolean I'm not sure if this should be capitalised. Maybe I should replace it with 
@return Boolean value of true if the user confirms
?
</panel>

<panel  header="**68 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/179#discussion_r825255585" expanded>

Resolved by leaving it unchanged
</panel>

<panel  header="**69 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/189#discussion_r825291411" expanded>

Resolved
</panel>

<panel  header="**70 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/193#discussion_r825311542" expanded>

Resolved
</panel>

<panel  header="**71 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826650970" expanded>

Resolved
</panel>

<panel  header="**72 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826651474" expanded>

Resolved
</panel>

<panel  header="**73 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826656268" expanded>

Resolved
</panel>

<panel  header="**74 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826657276" expanded>

Resolved
</panel>

<panel  header="**75 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/213#discussion_r826658089" expanded>

Resolved

</panel>

<panel  header="**76 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/216#discussion_r826764605" expanded>

Resolved
</panel>

<panel  header="**77 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/301#discussion_r831163968" expanded>

Resolved for both PRs
</panel>

<panel  header="**78 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/301#discussion_r831179222" expanded>

Resolved
</panel>

<panel  header="**79 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833151369" expanded>

Resolved
</panel>

<panel  header="**80 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833153926" expanded>

Resolved
</panel>

<panel  header="**81 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833154119" expanded>

Resolved
</panel>

<panel  header="**82 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833154960" expanded>

Resolved
</panel>

<panel  header="**83 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833155051" expanded>

Resolved
</panel>

<panel  header="**84 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833155174" expanded>

Resolved
</panel>

<panel  header="**85 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833156034" expanded>

Resolved
</panel>

<panel  header="**86 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833158811" expanded>

Resolved
</panel>

<panel  header="**87 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833163555" expanded>

Resolved
</panel>

<panel  header="**88 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833169559" expanded>

Good catch, resolved. I went with the first approach for clarity
</panel>

<panel  header="**89 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833176073" expanded>

Resolved
</panel>

<panel  header="**90 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833176325" expanded>

Resolved
</panel>

<panel  header="**91 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833176870" expanded>

Resolved
</panel>

<panel  header="**92 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833177578" expanded>

Changed to widthToAlignTo. resolved
</panel>

<panel  header="**93 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833505216" expanded>

Resolved
</panel>

<panel  header="**94 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/320#discussion_r833506387" expanded>

Resolved
</panel>

<panel  header="**95 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/330#discussion_r835726532" expanded>

Resolved
</panel>

<panel  header="**96 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/330#discussion_r835726802" expanded>

Resolved
</panel>

<panel  header="**97 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/352#discussion_r835750279" expanded>

Resolved
</panel>

<panel  header="**98 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/352#discussion_r835779027" expanded>

resolved
</panel>

<panel  header="**99 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/352#discussion_r835782242" expanded>

Will resolve in a future PR as this cannot be removed yet
</panel>

<panel  header="**100 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/374#discussion_r837601925" expanded>

Resolved
</panel>

<panel  header="**101 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/374#discussion_r837603229" expanded>

Resolved by removing it
</panel>

<panel  header="**102 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/374#discussion_r837613430" expanded>

Resolved
</panel>

<panel  header="**103 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/382#discussion_r838128731" expanded>

Resolved
</panel>

<panel  header="**104 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838131370" expanded>

Resolved
</panel>

<panel  header="**105 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838131413" expanded>

Resolved
</panel>

<panel  header="**106 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838217343" expanded>

Resolved across the DG
</panel>

<panel  header="**107 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838217590" expanded>

Resolved
</panel>

<panel  header="**108 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838218352" expanded>

Resolved
</panel>

<panel  header="**109 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/384#discussion_r838220334" expanded>

Oops, I changed this by accident. Reverted
</panel>

<panel  header="**110 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841194778" expanded>

Resolved
</panel>

<panel  header="**111 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841194884" expanded>

Resolved
</panel>

<panel  header="**112 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841195081" expanded>

Resolved
</panel>

<panel  header="**113 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841195203" expanded>

Resolved
</panel>

<panel  header="**114 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841558128" expanded>

Thank you for checking these in detail. I reworked the logic to fix these issues and will check for any unnecessary asserts/boolean checks.
</panel>

<panel  header="**115 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841558932" expanded>

You're right, I believe the parser should handle this already. Resolved by removing this line.
</panel>

<panel  header="**116 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841561859" expanded>

Fixed
</panel>

<panel  header="**117 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841565357" expanded>

Resolved
</panel>

<panel  header="**118 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841568646" expanded>

Resolved
</panel>

<panel  header="**119 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841569503" expanded>

Resolved
</panel>

<panel  header="**120 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r841572727" expanded>

Resolved
</panel>

<panel  header="**121 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r842413255" expanded>

Resolved
</panel>

<panel  header="**122 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r842441255" expanded>

Retrieving the involvedPersonList should not cause issues as involvedListPersonArray was created earlier by retrieveDetailsFromOldActivity. Any issues with the personlist would have thrown an exception during that method, before addAllActivityCost.

Removing the old activity should not cause issues as oldActivity was created earlier with session.getActivity(activityId), so an invalid activityId would have thrown an exception at that point before addAllActivityCost.
 
Creating a new activity will only cause issues if any of the parameters are invalid.:

- activityId cannot be invalid here because of the previously mentioned point. An invalid activityName would have been caught by ActivityEditCommandParser.
- totalCost is either calculated based on the costs from the original activity (in which case they must be valid), or supplied by the user. An invalid totalCost supplied by the user would have been caught by ActivityEditCommandParser.
- payerAsPerson was created using session.getPersonByName(name), so any issues would have thrown an exception here before addAllActivityCost.
- involvedPersonList is created using involvedListPersonArray, which should be valid as mentioned in the first point.
- invalid GST/service charge values would have been caught by ActivityEditCommandParser, so any user-supplied values must be valid. If the user does not supply any, they are retrieved from the original activity which can be assumed to be valid.

From this it seems to me that all scenarios have been accounted for, so this should be resolved.
</panel>

<panel  header="**123 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/435#discussion_r842450188" expanded>

This might be difficult to implement as the individual activity costs are not stored in the Activity itself, so helper methods will be needed to compare the costlists. I will consider adding this in a future PR if we have time.
</panel>

<panel  header="**124 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/452#discussion_r844937748" expanded>

Resolved by removing the sentence.
</panel>

<panel  header="**125 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/452#discussion_r844938012" expanded>

Resolved by removing the sentence.
</panel>

<panel  header="**126 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/482#discussion_r846715313" expanded>

Resolved
</panel>

<panel  header="**127 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/482#discussion_r846715423" expanded>

Resolved. Also changed line 532: A dummy activity unique identifier that cannot be used... to reflect this.
</panel>

<panel  header="**128 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/492#discussion_r847057896" expanded>

resolved
</panel>

<panel  header="**129 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/492#discussion_r847058330" expanded>

resolved by removing it
</panel>

<panel  header="**130 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/33#issuecomment-1059024483" expanded>

Fixed by #34 
</panel>

<panel  header="**131 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/260#issuecomment-1070819181" expanded>

Fixed by #262 
</panel>

<panel  header="**132 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/312#issuecomment-1076034683" expanded>

Fixed by #313 
</panel>

<panel  header="**133 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/issues/406#issuecomment-1086542260" expanded>

Steps to reproduce:

`session /create /n session /d today /pl alice bob`
`group /create /n group/ pl alice bob`
`group /delete /gid 1`
</panel>

</panel>


<panel type="info" header="### 10. HAR ..ARYL `@darylhjd` (47 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/17#discussion_r823361654" expanded>

I think better to move this into its own folder. Probably can name the folder `entities` or something.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/17#discussion_r823361995" expanded>

If we need to split to different types of entities (e.g. split Staff classes and Dish classes), then within the `entities` folder we can just add more folders haha.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/20#discussion_r823660858" expanded>

probably change this to `CHOICES` since it is final.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/20#discussion_r823663606" expanded>

the name i mean
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/35#discussion_r825670000" expanded>

i would just put this into another method
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/35#discussion_r825670543" expanded>

where is this exception thrown? (is it needed)
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826655990" expanded>

&hat;

assert is just to confirm that the program works, not for error checking, so need to also add a check beforehand to make sure that the staffId will never be 0 or less, THEN u add the assert statement after that.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826664531" expanded>

assert statement is for the coder, exception handling is for the user.

assert statement make sure your exception handling works (or just that your program will never reach a state you never intended it to be in the first place).
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826663757" expanded>

you are confusing assertions with error checking. assertions is to make sure that your program works because you coded it in a way that way such that a wrong state will never be reached. 

in this case you want to assert that staffId will never be &gt;= 0, so you are telling yourself that you coded your program in a way that staffId will never be &gt;= 0 at that point in the program where you put the assert statement.

so actually need to add a check before the assert statement to make sure that stadffId is never &gt;= 0, and then do whatever is required (such as showing telling user wrong id input) if it ever is.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826665688" expanded>

this is also why you can disable assertions for releases, because its meant for the coder, not the user.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827978892" expanded>

why suddenly got generic constructor lol
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827980463" expanded>

user can quit anytime by inputting '-' character when using `InputParser` methods. dunnid add your own.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827987945" expanded>

can simply be `while (true)`
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827990800" expanded>

btw, the gradle tests fail now lol
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827998470" expanded>

doesnt need to be generic tho, can just be `List&gt;Dish> dishList`
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r828159553" expanded>

no generics needed
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831140744" expanded>

do not use assert here. revert
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831141925" expanded>

why static? if static, all your orders will have the same dishes. 
revert.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831142369" expanded>

not static
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831142467" expanded>

not static
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831146557" expanded>

if you want to add assert statment, just add one `assert dishes.size() == 0` here or smth
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831146935" expanded>

below the if statement
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831173166" expanded>

what if the integer is indexoutofbounds? discuss with ziyan
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r833317332" expanded>

not using `getOrder()` method?
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833328299" expanded>

if controllers depend on another manager, we may need to move the manager instantiation into the maincontroller.
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833328761" expanded>

or, we can use factory classes to always get the same instance of the manager in different controllers.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r833368363" expanded>

instead of making this method throw indexoutofboundsexception, you should catch it and then tell the user if it is an invalid index.
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/76#discussion_r833416883" expanded>

you will need to loop through the array list, then cast to the actual object (in this case, `Staff`) and add individually. This helps to make sure that an exception will be raised here and not anytime in the future if you want to access the list and suddenly the object is not of the correct type.
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/76#discussion_r833456384" expanded>

technically dunnid a method for it ah can just this.staffs.add() or smth or ok
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/75#discussion_r833838877" expanded>

Use a better name for this file please.
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r834058005" expanded>

actually, you can override the `toString` method to return a string representation of the order, no need to create a function to print it.
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/75#discussion_r834060639" expanded>

this will change once we change the managers to have singleton pattern right?
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/81#discussion_r834064815" expanded>

i think would be better to put all classes first, then all relations at the bottom, easier to see.
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/75#discussion_r834073700" expanded>

ok then will let ziyan settle
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834552242" expanded>

did you fetch from upstream? dont commit logs, and the gitignore should also include logs folder once you fetch.
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#discussion_r834565750" expanded>

i think would be better to have dishManager as a attribute of the order controller, rather than be embedded in orderManager.
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#discussion_r834566881" expanded>

then here, you can rewrite it such that it will pass in the orderIndex and the Dish object as the parameters. you can get the dish object in the order controller, rather than inside the order manager.
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#discussion_r834567178" expanded>

if not we have coupling between managers, which was not the intended design.
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834570683" expanded>

you do know theres a `isEmpty` method or smth right lol
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834571355" expanded>

also im not sure how name would ever be null if you use getString method of InputParser
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834572361" expanded>

so technically, you can just check for name.isEmpty() in the constructor and throw IllegalArgumentException there, dunnid a extra method to check valid name.
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834886657" expanded>

ok ill leave it to u
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r835710654" expanded>

you committed your merge conflict into the file
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r835710714" expanded>

u dont need to explicitly call toString()
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r835710776" expanded>

im not sure you resolved the conflicts properly.
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r835711528" expanded>

another byproduct of the merge conflict
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/142#discussion_r841185648" expanded>

this means not yet implemented or?
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/59#discussion_r831777063" expanded>

u shud code it such that it only loads once when you open the app, and only saves once when u exit the app nicely 
</panel>

<panel  header="**49 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/13#issuecomment-1062947513" expanded>

@Lim-Shi-Han you check then if it works well for u, then ok.
</panel>

<panel  header="**50 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/12#issuecomment-1064009707" expanded>

severity tag for bugs only haha
</panel>

<panel  header="**51 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/21#issuecomment-1065271339" expanded>

there is nothing to test...
</panel>

<panel  header="**52 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/29#issuecomment-1066049008" expanded>

@wang1351 @Lim-Shi-Han @BotBw will need yall to update your controllers to make use of this new way of getting input.
</panel>

<panel  header="**53 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/29#issuecomment-1066049146" expanded>

the tests will fail now, but i will merge anyway after a review, but yall need to change the controllers after that
</panel>

<panel  header="**54 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/29#issuecomment-1066051536" expanded>

i will update this to push to a new branch called `new_input`, so yall can update your controllers and push the changes to that new branch, in case something goes wrong in `master` branch
</panel>

<panel  header="**55 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/31#issuecomment-1066438032" expanded>

@BotBw in case other people are working on this branch also, maybe can work on a fork of this branch.
</panel>

<panel  header="**56 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/31#issuecomment-1066452542" expanded>

ok nvm im just gonna merge this, cos i think its confusing for many people. just create PRs to put add your changes into master branch.
</panel>

<panel  header="**57 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/35#issuecomment-1066589787" expanded>

> should we deal with invalid input by throwing an exception (like IllegalArgumentException) at entities level and catch that exception at child controller level? (I print the message saying that the input is not valid, then return false in optionSwitcher to let user select the option and input again)

for example u mean that we give invalid input for creating a Staff object? that should be handled within the `createStaff` method, and u shouldnt propagate the error upwards to `optionSwitcher`.
</panel>

<panel  header="**58 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/33#issuecomment-1067517893" expanded>

Don't close yet, cos the other controllers not updated.
</panel>

<panel  header="**59 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/39#issuecomment-1067530877" expanded>

Please use a different method for each operation, rather than doing everything inside the switch case. 

Also update the function signature (it no longer throws IllegalArgumentException, but OperationTerminationException). 

Also use InputParser methods for getting input rather than creating your own scanner and using it.
</panel>

<panel  header="**60 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/33#issuecomment-1067534906" expanded>

You can use `StaffController` as an example if yall confused on what to change.
</panel>

<panel  header="**61 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/41#issuecomment-1067544915" expanded>

oh there was an extra bracket oops but nvm i will fix next pr.
</panel>

<panel  header="**62 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/42#issuecomment-1067545778" expanded>

its okay, i formatted alr.
</panel>

<panel  header="**63 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/43#issuecomment-1067550247" expanded>

already fixed haha
</panel>

<panel  header="**64 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/42#issuecomment-1067568623" expanded>

damn bruh so many fixes xd
</panel>

<panel  header="**65 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/44#issuecomment-1067570539" expanded>

fetch upstream changes
</panel>

<panel  header="**66 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/44#issuecomment-1067572310" expanded>

tests MUST pass for this PR.
</panel>

<panel  header="**67 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/46#issuecomment-1067629976" expanded>

dont merge yet bah, until we settle the tests first.
</panel>

<panel  header="**68 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/46#issuecomment-1067636011" expanded>

why not make the logger a static variable of the Controller class? then the logInfo (and logError etc... i cant rmbr all the levels of logging) methods can go into the Controller class as well.

if we want to show the class name, i think java has a way of getting that.
</panel>

<panel  header="**69 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#issuecomment-1067933365" expanded>

if you want to add the name of the class getting logged, you can do this for the logInfo method:
```
    public static void logInfo(Object o, String msg) {
        logger.log(Level.INFO, String.format("%s: %s", o.getClass().getSimpleName(), msg));
    }
```

but looks okay other than that.
</panel>

<panel  header="**70 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/56#issuecomment-1073914133" expanded>

NO SQL
</panel>

<panel  header="**71 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/68#issuecomment-1076390199" expanded>

> But that means if the user terminate the programme then it won't safe though

wdym
</panel>

<panel  header="**72 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/69#issuecomment-1076412691" expanded>

or what you can do is override the `toString()` method of the `DishManager` class to return a string representation of all the dishes. Then, the controller will simply do `System.out.println(this.dishManager)`.
</panel>

<panel  header="**73 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/68#issuecomment-1076416436" expanded>

> > 
> 
> As in like when the user inputs '-' to terminate the program the new data won't be saved... So is that by design or what

hmm it wont save meh. when i in the dish menu and i enter "-" it will save. u try
</panel>

<panel  header="**74 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#issuecomment-1076471692" expanded>

i am actually not sure how there is a conflict lol
</panel>

<panel  header="**75 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#issuecomment-1077869816" expanded>

> why this one is not being checked?

maybe we busted github action quota xd
</panel>

<panel  header="**76 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#issuecomment-1077900585" expanded>

sorry i on phone. why pass in the dish index and the dish manager, when u can get the dish object directly ah.
</panel>

<panel  header="**77 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#issuecomment-1078571802" expanded>

> > sorry i on phone. why pass in the dish index and the dish manager, when u can get the dish object directly ah.
> 
> to make the processing part in Manager? If you prefer it being in controller ofc can

ah ok sure then
</panel>

<panel  header="**78 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/63#issuecomment-1078595225" expanded>

is this done?
</panel>

<panel  header="**79 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/92#issuecomment-1078645373" expanded>

why controller need to be singleton?

there shouldnt be a need for singleton controller. @BotBw 
</panel>

<panel  header="**80 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/71#issuecomment-1078652689" expanded>

all managers are now singletons. good job my dudes.
</panel>

<panel  header="**81 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/63#issuecomment-1079685706" expanded>

isnt your ordermanager alr implement the load and store alr? that means should be done alr?
</panel>

<panel  header="**82 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/103#issuecomment-1083985472" expanded>

re-upload v2.0 after this?
</panel>

<panel  header="**83 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/103#issuecomment-1084027426" expanded>

nvm bah just update
</panel>

<panel  header="**84 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/106#issuecomment-1085525280" expanded>

Not sure why I still don't have v2.0 PR tag.
</panel>

<panel  header="**85 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/110#issuecomment-1086550783" expanded>

standardise
</panel>

<panel  header="**86 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/111#issuecomment-1086550834" expanded>

i feel this one very low severity also lol so dunnid if you too lazy.
</panel>

<panel  header="**87 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/112#issuecomment-1086550946" expanded>

isit your part of the doc?
</panel>

<panel  header="**88 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/116#issuecomment-1086551209" expanded>

hmmm im not too sure whats happening here prob need more investigation.
</panel>

<panel  header="**89 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/117#issuecomment-1086551253" expanded>

LOL
</panel>

<panel  header="**90 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/120#issuecomment-1086551493" expanded>

same as #116 
</panel>

<panel  header="**91 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/122#issuecomment-1086551608" expanded>

i think dunnid regex but prob need an option to edit staff.
</panel>

<panel  header="**92 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/123#issuecomment-1086551868" expanded>

As per new information in user guide, using a menu may actually be faster. up to you guys whether to change or not.
</panel>

<panel  header="**93 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/124#issuecomment-1086551939" expanded>

might be better for user facing index to start from 1, then minus 1 in the backend.
</panel>

<panel  header="**94 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/125#issuecomment-1086552042" expanded>

maybe print dishes also.
</panel>

<panel  header="**95 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/126#issuecomment-1086552108" expanded>

add option to print all orders.
</panel>

<panel  header="**96 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/130#issuecomment-1086552349" expanded>

wellllll technically user not using application as intended, so we not responsible for undefined behaviour arising from improper usage of app xdddddddd
</panel>

<panel  header="**97 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/116#issuecomment-1086764500" expanded>

ok then i close.
</panel>

<panel  header="**98 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/144#issuecomment-1087291101" expanded>

which boolean name?
</panel>

<panel  header="**99 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/141#issuecomment-1091866807" expanded>

![image](https://user-images.githubusercontent.com/53652695/162233033-d6f06405-b858-4f18-bfd9-5378963b3644.png)

@BotBw isit you added all the classes for this diagram? supposed to be a quick overview, so actually i only added a few classes before, so it was easy to see. can change back?
</panel>

<panel  header="**100 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/159#issuecomment-1091883165" expanded>

and also any remaining parts that isnt added yet
</panel>

<panel  header="**101 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/119#issuecomment-1094199403" expanded>

@Lim-Shi-Han this one isit u ah
</panel>

<panel  header="**102 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/119#issuecomment-1094219024" expanded>

ok u say no issue i say no issue
</panel>

<panel  header="**103 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/135#issuecomment-1094219189" expanded>

@BotBw comment on this bah.
</panel>

<panel  header="**104 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/135#issuecomment-1094230765" expanded>

ok i am agreeable with this.
</panel>

<panel  header="**105 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/190#issuecomment-1094841577" expanded>

I MERGE?
</panel>

</panel>


<panel type="info" header="### 11. LI, ..NDAN `@wli-linda` (43 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#discussion_r832856985" expanded>

Is it possible to extract this portion as a method? This seems a little deeply nested.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#discussion_r832857532" expanded>

Nice extraction of methods :)
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832858995" expanded>

I think these two constants serve a very similar purpose? If I understand correctly, would this break down if you're indexing an entry that goes into the double digits?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832859712" expanded>

Does this function throw an exception? It seems to already be caught at line 141?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832860668" expanded>

This method is more than 30 lines long, is it possible to extract some methods? 
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832860796" expanded>

Nice, the new format looks good :)
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832922710" expanded>

Ah my bad, that makes sense! But maybe it's still worth merging the two into something like `INDEX_TO_BE_PARSED` that can be used for both features?
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832924754" expanded>

Thanks, looks good!
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837339325" expanded>

Nice use of OOP
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837340215" expanded>

Interesting way of making the method less nested!
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837340797" expanded>

Good move to make the exceptions more specific
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837341418" expanded>

Is it possible to break this method down to make it shorter and less nested?
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837342270" expanded>

Is there a reason why you chose to have the empty command as a separate case, instead of as an invalid command?
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837344957" expanded>

Is it possible to extract some methods out and make this method shorter?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837345473" expanded>

I think you might be missing a space here for `.split(" ", 2)`.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837346662" expanded>

Also might need a space here between the two arguments in `.replace()`
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837347259" expanded>

Can consider using `.isEmpty` instead
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837347583" expanded>

Can consider extracting this condition out to make it more understandable!
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839372293" expanded>

Good use of constructors! Consider shortening the description to something like "create new Module" such that the diagram is at a higher level/more readable?
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839373461" expanded>

Is it possible to extract out anything for this method, so that it's shorter?
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839375538" expanded>

Would it be a good idea to enclose this in a code chunk or include as a screenshot to improve readability?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839376360" expanded>

Just a stylistic choice, but perhaps bullet points would be nice here instead of numbering?
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839377674" expanded>

Thanks for including this! Perhaps include another line or two about our app targeting NUS students?
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/88#discussion_r839384116" expanded>

Consider naming the boolean parameter such that it sounds more like a boolean, e.g. `isCommand`, `isFromCommandLine`, or something like `shouldNotPrint`
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/88#discussion_r839385395" expanded>

Good use of JavaDoc comments and extracting out constants!
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/88#discussion_r839387118" expanded>

Consider also editing the main menu section so that the formatting is consistent with this section!
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/88#discussion_r839387549" expanded>

Good inclusion of scope!
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/88#discussion_r839388199" expanded>

Consider incorporating Style.puml in v2.1 so that diagrams in the DG have a more consistent look
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/88#discussion_r839391865" expanded>

Is there a reason why you don't include the navigability from `AllOnUs` to the manager/tracker classes? If these are less relevant to this diagram, is it maybe better to leave out the `AllOnUs` class entirely to avoid confusion?
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839412668" expanded>

Ooh interesting, thanks for the tip!
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842567309" expanded>

What is the rationale for this?
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842568584" expanded>

Minor comment, but should there be an extra line here before the `@param` tag for JavaDoc?
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842569011" expanded>

Nice extraction of constant
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842570363" expanded>

Nice way of simplifying complicated expressions
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842573317" expanded>

Is there any way of using polymorphism to create the same method for the four fields? Also not too sure myself as I'm not familiar with your implementation, just wondering as these four methods look similar to each other
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/132#discussion_r845043438" expanded>

Thanks for adding this! I feel like there might be an automatic way of generating TOCs, but maybe not worth it to look into at this point. 
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/132#discussion_r845044083" expanded>

Good addition!
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/132#discussion_r845045180" expanded>

Nice, thanks for making the formatting consistent!
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845046105" expanded>

Nice extraction of constants! Do all of these need to be `public`?
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845047145" expanded>

Is this change meant to address #116, or is it a code quality improvement?
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845047402" expanded>

Thanks for updating this for consistency!
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845047891" expanded>

Nice use of Enum :)
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/137#discussion_r845048800" expanded>

Nice job on creating a stub for unit testing!
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r834187854" expanded>

I'll try tweaking my UML diagram accordingly next time, thanks for the tip
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/78#discussion_r837350450" expanded>

Yes agreed, thanks for pointing this out
</panel>

<panel  header="**46 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/45#issuecomment-1071098328" expanded>

Should `src/main/java/META-INF/MANIFEST.MF` be committed? Otherwise, LGTM.
</panel>

<panel  header="**47 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/46#issuecomment-1073744722" expanded>

Actually, maybe not, since it decreases testability, and there isn't significant risk in creating multiple instances of the Contacts Manager class
</panel>

<panel  header="**48 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/11#issuecomment-1075080434" expanded>

This issue was resolved with linked development, not sure why it wasn't automatically closed.
</panel>

<panel  header="**49 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/124#issuecomment-1086135360" expanded>

According to the UG, the find command only searches for name matches, though it isn't clarified that partial matches also apply. Here, `find e` is able to match because the name `Jane Doe` contains the character `e`.

There are potential enhancements to `find` and its documentation, but maybe it'd be better represented in a new issue that clarifies the scope of the feature. 
</panel>

<panel  header="**50 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/123#issuecomment-1086136725" expanded>

Undecided whether this should be a feature enhancement or just an additional comment in the documentation... It seems like a relatively rare scenario, and even if it happens, I feel okay about only the most recent edit being registered.
</panel>

<panel  header="**51 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/122#issuecomment-1086137213" expanded>

Can consider phrasing this better, if time allows.
</panel>

<panel  header="**52 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/117#issuecomment-1086138328" expanded>

Duplicate issue as #118. Also might clarify in documentation that certain fields are optional, undecided.
</panel>

<panel  header="**53 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/118#issuecomment-1086138895" expanded>

Data validation for adding contacts; also check other variation in #108 
</panel>

<panel  header="**54 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/108#issuecomment-1086140317" expanded>

Duplicate issue as #118 
</panel>

<panel  header="**55 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/121#issuecomment-1086140936" expanded>

Duplicate issue as #105 
</panel>

<panel  header="**56 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/120#issuecomment-1086145178" expanded>

This was unexpected... Maybe not exiting the method early enough, not too sure, will double check code.
</panel>

<panel  header="**57 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/125#issuecomment-1086147372" expanded>

Re-routed to new issue #127, which better describes what needs to be done.
</panel>

<panel  header="**58 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/109#issuecomment-1086150270" expanded>

I think it's clarified in the UG that users shouldn't tamper with the data files, but perhaps an enhancement could be implemented? If this seems like a less pressing issue/enhancement, can consider closing @mathanmahe 
</panel>

<panel  header="**59 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/105#issuecomment-1091112272" expanded>

Won't be implementing any validation checks for faculty information
</panel>

</panel>


<panel type="info" header="### 12. BANG.. KIT `@heekit73098` (39 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825616926" expanded>

i think this regex accepts (add /t "123" /m abc), which should not affect the correctness but still might be a small bug
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825620690" expanded>

i think keeping the invalid group can make the input stricter which could reduce potential bugs
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825951411" expanded>

Invalid group is redundant so no changes are needed
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/100#discussion_r830488006" expanded>

Perhaps you can restrict the tagOperation group to add or del to simplify where the exception is thrown
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/100#discussion_r830488353" expanded>

if the tagDescription can contain spaces, maybe consider wrapping with double quotes for consistency with the other commands
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/100#discussion_r830488685" expanded>

i think the regex might accept 
tag add 1 -m cs2113t
with the task description being "-m cs2113t", tested online so im not sure if it works as intended or not
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/107#discussion_r832903946" expanded>

I think we are following import java library first before our defined packages
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/107#discussion_r832915217" expanded>

I'm not sure if this change is needed based on above commt
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/107#discussion_r832915707" expanded>

i think this could be replaced with moduleList.getModuleList() so we do not have to make the list variable public, or have two methods of access
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#discussion_r837399400" expanded>

Im not sure if instantiating a new TextUi object here would be better to be consistent with the UI component. I think integrating with Main might be harder and non-trivial here so if we do change this, then we will need to update the DG
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#discussion_r837399944" expanded>

In my opinion, I think a loop here instead of the exception might be better as discussed
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#discussion_r837401098" expanded>

im not sure if the \s* in the front and back is needed here if the arguments will be trimmed either way
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#discussion_r837401729" expanded>

the regex here could be updated as well to keep it consistent
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#discussion_r837402583" expanded>

i think this tagDescription should be tagName as seen in the format below
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/124#discussion_r838395658" expanded>

Consider shifting all these to the StringConstants
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/124#discussion_r838409968" expanded>

i think keeping it here is fine for 2.0 but maybe we can consider shifting this to parser for 2.1 to keep it consistent
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/124#discussion_r838410570" expanded>

this Lo1 looks like lol instead so im not sure if u want to keep it
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/118#discussion_r838470342" expanded>

Are we providing the API links?
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/118#discussion_r838471319" expanded>

this regex does not achieve the option CONFIG_NAME=NEW_VALUE because of the \s* before newValue, but this change should be resolved in the other PRs
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841160825" expanded>

The regex should make invalid always be null, maybe invalid can be removed in this case
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841161380" expanded>

can you check if the regex correctly accepts `add task "task" -d "description"`, based on my online testing, it seems that -d "descriptio" is captured as invalid flag
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841161627" expanded>

I think this exceeds 30 LOC based on the guidelines, so consider extracting them into another function
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841163874" expanded>

maybe consider shifting `(?&gt;taskModule>\w+)` to before the `|` like `(\s+((-m)\s+(?&gt;taskModule>\w+)|(?&gt;invalidFlag>.*)))?`
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841244786" expanded>

would throwing `NoSuchModuleException` in `getModule` instead of returning null be more concise since theres no need to check for null all the time?
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841432288" expanded>

I'm not sure if im reading this right, but does it look better if there was another column for examples?
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841436584" expanded>

Maybe consider removing the bullet point for the sections with only one subsection
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841439723" expanded>

> instead

The instead here should be removed
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841442275" expanded>

The help and list command are similar in the sense that they both have an optional parameter in the command, but the format for both commands are abit different. Maybe the help command can be rephrased as 
`If no COMMAND_WORD is given, a generic help message is displayed instead.`
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841612780" expanded>

yup makes sense
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/173#discussion_r841613670" expanded>

i think we will keep it like this as of now and see if its an issue in the future
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r842674488" expanded>

correct me if im wrong, but isnt the issue here because either `-d` or `-t` entered will be flagged as `invalidTaskNameFlag` because the regex matches the group in order and `(?&gt;invalidTaskNameFlag>.*)` captures anything that is not `-n`. Im not sure how do you want to make the error message more descriptive since the parameter here can be either `-d`, `-n` or `-t`, so unless the user has specified `-d` and then entered something invalid, only then can we conclude that the TASK_DESCRIPTION is wrong. So if that is the case, then if theres an error, then we can check which of the 3 optional parameters is used and give the error message as such, or if all 3 optional parameters are not captured, then it means the flag is incorrect 
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r842676078" expanded>

> So if that is the case, then if theres an error, then we can check which of the 3 optional parameters is used and give the error message as such, or if all 3 optional parameters are not captured, then it means the flag is incorrect

Not in the regex but as logic code i guess
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r842894417" expanded>

This looks like it exceeds 30 LOC
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/194#discussion_r846661392" expanded>

Im not sure if you want to refactor this as it looks like arrowhead style
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/194#discussion_r846661430" expanded>

same here, looks like arrowhead style
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/194#discussion_r846711464" expanded>

7 is missing in the index here
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/199#discussion_r846790095" expanded>

this should be removed
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/199#discussion_r846790109" expanded>

same here
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/199#discussion_r846790251" expanded>

`/unmarked` can be removed here as well i think
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823324048" expanded>

changed to switch case as suggested
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823324389" expanded>

i think overloading constructors here might be infeasible given that both description and working time are strings. Perhaps we can change it if we decide to change the time to another data type
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823333156" expanded>

Ive changed all checking for empty string to null fields, including in DeleteParser.java
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/83#discussion_r825405852" expanded>

yup i fixed the regex and added junit tests for add module so should be fine
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/83#discussion_r825405964" expanded>

changed to isNull and NULL_FIELD to just null
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/92#discussion_r827587709" expanded>

i extracted the nested if-else block into a function instead 
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/92#discussion_r827587874" expanded>

yup, changed the order
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/92#discussion_r827588239" expanded>

import order changed as well
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830614087" expanded>

I think -c would be in conflict with - being used for optional arguments. Instead, I removed the flag as suggested.
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830614165" expanded>

Same as above, and I have added support for CS, CU, S and U.
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830614376" expanded>

Yup, I think changing this to an enum is better especially when the grade is used to calculate CAP afterwards, I have added the Grades enum along with its corresponding grade points.
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830614641" expanded>

Yup, I have corrected both regex in the code and the explanation.
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#discussion_r832864876" expanded>

I did it like that because i thought the PrintSream Object is System.out. So it should exists even when TextUi is destroyed
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#discussion_r833195252" expanded>

Removed the Class Diagram for now instead to see how we can improve on it in the future.
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844633759" expanded>

ok changed
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844634122" expanded>

changed the format to include the invalid input as well
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844634453" expanded>

same as above
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844634778" expanded>

Shifted the logic to abstract class AddParser
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844634920" expanded>

shifted the logic to abstract class EditParser
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845973026" expanded>

yup changed
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845973112" expanded>

added also
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845973269" expanded>

removed the error

</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845973594" expanded>

yup removed
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/196#discussion_r846700115" expanded>

yup changed
</panel>

<panel  header="**64 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/196#discussion_r846700143" expanded>

renamed to `stringifyModuleTaskList`
</panel>

<panel  header="**65 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/197#discussion_r846716908" expanded>

I dont think it sounds right to say `Please first add some grades!`? because the user wants to remove a grade, so suggesting the user to add a grade just to remove it sounds redundant
</panel>

<panel  header="**66 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1086825006" expanded>

Could be cause the invalidTaskNameFlag captures the `-d` instead, as the regex first checks for -n, and since it is not present, it proceeds to match the input in the invalidTaskNameFlag group. Maybe to fix u could have one invalid flag group that captures everything except for `-d`, `-n` and `-t` before capturing the correct group
</panel>

</panel>


<panel type="info" header="### 13. HO W..SEAN `@SeanHoWB` (37 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/29#discussion_r823886241" expanded>

add new line at end of file!
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/38#discussion_r824480104" expanded>

Lecture says need to add in a happy path before a negative path, so perhaps can print a list that has input inside?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/38#discussion_r824480413" expanded>

Rmbr to add newline at end of file
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/51#discussion_r828025130" expanded>

gradle says here got issue, like identation is 12, but shld be 8

![image](https://user-images.githubusercontent.com/69450377/158603386-7ee1cf25-9202-4431-8124-40191f96dc57.png)

</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/74#discussion_r835395013" expanded>

some magic literals here, isit possible to extract them out?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/74#discussion_r835396755" expanded>

can change the magic literal 1 and 0?
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837008946" expanded>

can explain abit into what this funciton does, like putting the magic numbers into constants
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837009507" expanded>

why swap the ending flag and the " "? my idea was that ending flag is going to appear like " /c"
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837010402" expanded>

not sure if we shld use the line here, cos my add comand also dont have
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/85#discussion_r838201358" expanded>

category flag is compulsory, so is all flags, so update command will always just replace all fields
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838520641" expanded>

put is valid input time into the addcommandinputtest
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838520907" expanded>

shld be /e
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838521525" expanded>

should avoid arrowhead code
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838522612" expanded>

can consider putting in general functions/ time functiuons
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838522994" expanded>

better naming of the inputstring?
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838523454" expanded>

secondInputString perhaps, or specify what its for
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/88#discussion_r838651329" expanded>

is the double space an error?
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/88#discussion_r838652641" expanded>

not sure if we need another line seperator here
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/88#discussion_r838653513" expanded>

user tests may have issues here due to date time system
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/88#discussion_r838667025" expanded>

```suggestion
```
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/89#discussion_r838673190" expanded>

is locale used?

</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/89#discussion_r838673720" expanded>

if can handle magic literal itll be good
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/90#discussion_r839171563" expanded>

when we have catch errors we often throw new Mindmymoneyexception, instead of printing directly
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/90#discussion_r839171655" expanded>

```suggestion
     * @param user User whose lists need to be saved.
```
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841089341" expanded>

wait. is it supposed to be just */ ?

</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/162#discussion_r843007641" expanded>

why delete this?
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/175#discussion_r846597112" expanded>

colour in the activation bars, can refer to how KH did it
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/175#discussion_r846597717" expanded>

is it posible for checkaftercurrentdate to be checked here instead of the addcommand class?
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846777825" expanded>

delete the data pls!
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846778011" expanded>

```suggestion
>- Parameters and flags are space-separated. For example: `list/e` is not a valid command while `list /e` is valid.
```
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846778065" expanded>

```suggestion
>- All parameters are compulsory unless stated in the notes.
>- Input the parameters in the order shown, or the application will not be able to read your
```
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846778247" expanded>

why include this here when its mentioned above in line 257?
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846778411" expanded>

why commented?
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/202#discussion_r846823550" expanded>

```suggestion
5. If the old expenditure's `PAYMENT_METHOD` or new expenditure's `PAYMENT_METHOD` is not cash, `UpdateCommand.updateExpenditure()` invokes `UpdateCommand.updatePaymentMethod()` to update the corresponding `creditCard.totalExpenditure`.
```
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/202#discussion_r846823670" expanded>

```suggestion
1. During the execution, `UpdateCommand.updateCreditCard()` will parse through user input to obtain the `CREDIT_CARD_NAME`, `CATEGORY`, `CASH_BACK` and `CARD_LIMIT` fields.
```
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/202#discussion_r846824243" expanded>

does it make sense to call testExpenditureParameters here?
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/213#discussion_r846999368" expanded>

shld have delete instructions too
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822574561" expanded>

Was thinking of having it to be like helper functions, so we dont have to rewrite same functions in multiple places
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822574871" expanded>

ok.... was trying to clear the build checks... iritating thing

</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822575198" expanded>

i see, this one can discuss when we meet
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/15#discussion_r822575654" expanded>

I think update may use, we keep original first bah
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/24#discussion_r823543827" expanded>

This one is in the command folder, its when i follow lecture video and right click generate test function
![image](https://user-images.githubusercontent.com/69450377/157637657-d27a3e47-b62c-43b5-a42a-f14633927fe1.png)


</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832297297" expanded>

oh right haha
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832434478" expanded>

ok fixed, is this magic literal tho
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832461040" expanded>

what would you suggest tho? why i put the for loop in the switch is to not have the loop comparing the switch case for every loop, as compared to placing the loop outisde and only putting the get command line in the switch 
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832902738" expanded>

so for each loop we seperate into another function? hmm...

</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833049506" expanded>

thanks!!
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833052063" expanded>

ok!
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833843327" expanded>

this is for future calculate commands! so that we can append commands in later implementations
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833845493" expanded>

oh this is referred from expenditure list!

</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833847245" expanded>

its meant for the others to change! when they edit their code they have reminder
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833847795" expanded>

hmm, ok will consider!
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838591735" expanded>

resolved
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838591922" expanded>

resolved
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838592355" expanded>

ooopsies, resolved
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838593365" expanded>

resolved for all MMM
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838593594" expanded>

dammit git, ok resolved
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838594332" expanded>

sure man, if merge alr then we work on it?
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#discussion_r838595141" expanded>

thanks! resolved
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/182#discussion_r846614201" expanded>

its what i auto format the code, ok will remove
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/206#discussion_r846932855" expanded>

meant to be more than 50k, fixed thanks
</panel>

<panel  header="**62 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/71#issuecomment-1075262640" expanded>

looks good
</panel>

<panel  header="**63 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/132#issuecomment-1086590923" expanded>

did we update this yet? 
</panel>

<panel  header="**64 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/121#issuecomment-1086592418" expanded>

invalid, i can buy 2 bowls of porridge on the same day
</panel>

<panel  header="**65 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/177#issuecomment-1093836552" expanded>

![image](https://user-images.githubusercontent.com/69450377/162565398-f35e273a-12af-4bac-ba7b-f458cd461857.png)

</panel>

<panel  header="**66 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/181#issuecomment-1093837133" expanded>

same as card limit

</panel>

<panel  header="**67 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/205#issuecomment-1094504165" expanded>

![image](https://user-images.githubusercontent.com/69450377/162660007-58b748ea-a824-4f76-b8d6-72511cd263b5.png)
fixed as shown, cannot add 2 credit card with same name. Should be in the codebase alr
</panel>

</panel>


<panel type="info" header="### 14. TEAN.. JUN `@teanweijun` (36 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/23#discussion_r822377158" expanded>

Missing space behind `Exception`
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/23#discussion_r822377909" expanded>

Package name should be lower case
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/23#discussion_r822378309" expanded>

Would be better if we had a `HORI_LINE` before printing also?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/23#discussion_r822378835" expanded>

I don't think `content` is necessary as a variable? Can just `System.out.println(message)`.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/26#discussion_r822453033" expanded>

Can be private, ExpenditureList won't see children anyways
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/26#discussion_r822456126" expanded>

Buggy. You might want to use a parser method instead? Perhaps can throw some exception if it fails
As of now the code will still return 0 like nothing happened even though there is something printed
More similar situations below
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/26#discussion_r822459090" expanded>

Interesting implementation... Might use that for my own portion 
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/42#discussion_r824588220" expanded>

I think it'll be more readable to have this as it's own function. Also allows for better SLAP
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/42#discussion_r824588412" expanded>

Same as above
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/42#discussion_r824588589" expanded>

One more instance here
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/50#discussion_r825418428" expanded>

I think it'll be cleaner if you can initialise these 3 variables in the same line which you declared them.
Similar for functions below
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/50#discussion_r825418557" expanded>

Small syntax issue, missing space between `Exception` and `{`
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/50#discussion_r825418731" expanded>

Same syntax issue as above
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/52#discussion_r825424167" expanded>

Would be better to specify what kind of index. validIndex? invalidIndex?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/116#discussion_r833198444" expanded>

Consider making these Strings `final`?
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/116#discussion_r833198946" expanded>

Same as above
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/116#discussion_r833199607" expanded>

Consider the use of some constants?
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/120#discussion_r833308630" expanded>

Typo in `CommandFactory` in the second instance of this line
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/120#discussion_r833313722" expanded>

`return` here is not necessary I think? It should be clear enough.
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/120#discussion_r833314558" expanded>

Typo in file name of both the puml and png
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/167#discussion_r838161476" expanded>

Slight logic error here, each `Person` has `1` `IncomeList` and `1` `ExpenditureList`. There is no `Money` class in between 
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/217#discussion_r841166276" expanded>

Is this line necessary? `familyTest` would be newly initialised and have nothing to store right?
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/235#discussion_r843916385" expanded>

Consider splitting this into 2 lines for better SLAP?
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/244#discussion_r845269531" expanded>

For this diagram, shouldn't the lifeline for AddPersonCommand end after the cross?
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/244#discussion_r845272935" expanded>

Would the word `generates` fit better than `returns` in this case?
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/248#discussion_r846268474" expanded>

Small English issue, `management and categorise` and be better split to `management, and categorise` for easier readability?
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/248#discussion_r846269100" expanded>

Same thing, consider changing to `written in, and meant`
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/248#discussion_r846272176" expanded>

Consider rephrasing this portion further. What does it mean to have classes underneath the component? By means of extension, or consisting? 
`Logical grouping` here could also be paraphrased to not be confused with generation logical grouping
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846991936" expanded>

Would it be better to include a `fail()` statement right after this command in the `try` block as well? Then you could catch those that did not even throw errors.
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846992570" expanded>

Same comment as that in `AddPersonTest.java`
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846993245" expanded>

Did you forget to specify the type of inputs that `AddRecordCommand` will be given?
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846993641" expanded>

Same comment as that in `AddPersonTest.java`
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846993725" expanded>

Same comment as that in AddPersonTest.java
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846993867" expanded>

Same comment as that in AddPersonTest.java
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846994011" expanded>

Same comment as that in AddPersonTest.java
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/257#discussion_r846994133" expanded>

Same comment as that in AddPersonTest.java
</panel>

</panel>


<panel type="info" header="### 15. CHOO.. KAI `@chooyikai` (34 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#discussion_r820330338" expanded>

I tested this in the command line and `•́ . •̀ `does not print properly... maybe change it to something else? (Same for the other places this face is used)
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#discussion_r820330615" expanded>

`UnkownCommandException` should be `UnknownCommandException`
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#discussion_r820331399" expanded>

The current regex will parse "hello argument" into "hello" and " argument" (note the space before "argument"). Maybe change this to `(?&gt;commandWord>\\S+)( (?&gt;arguments>.*))` instead?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#discussion_r820332044" expanded>

Not sure why this constructor `throws ModHappyException` because I could not find any code inside it which does that. Can we remove it?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#discussion_r820333066" expanded>

Since `InstantiateAbstractClassException` is not used anymore (and anyway Java has its own built in exception for this) maybe we can just delete the class
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#discussion_r820354870" expanded>

Let's remove all the faces first and decide later... the face on my side appears like `•?. •̀ `
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#discussion_r822385561" expanded>

Maybe check for `index &gt; 0 || index >= list.size()` instead? Just in case.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#discussion_r822386475" expanded>

Maybe check whether `getModule()` returns `null` before attempting to call `list.remove()` on it.

Also, see above remark on returning the removed module instead.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#discussion_r822388333" expanded>

Instead of catching this exception using try-catch and using `System.out.println()`, maybe we should use throws instead to pass it to the Main class, which will handle it for us
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#discussion_r822392535" expanded>

This part could be simplified if `removeModule` returned the module that was deleted instead of being a `void` method. Then you could just do `result = moduleList.removeModule(moduleCode)` + " has been deleted".

Also, maybe convert the string constant into a format string (`"%s has been deleted."`) and call String.format here instead.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#discussion_r822392658" expanded>

Same as above
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#discussion_r822393405" expanded>

See above remark on returning the removed Task instead.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#discussion_r822560671" expanded>

Consider wrapping `Integer.parseInt()` in a try-catch block, just in case (although this should not fail during normal code execution because the regex already filters out invalid inputs or negative numbers).

Once done it should be good to merge.
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823269076" expanded>

null and true are actually based on my implementation of the AddCommand constructor if the user did not supply some of the optional arguments. We can discuss this later if you have a better way to implement it.
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/84#discussion_r825529397" expanded>

Maybe we should move all of this stuff to a class like `duke.util.StringConstants`? Putting it in TextUi seems weird because most of these strings have nothing to do with the TextUi functionality
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/84#discussion_r825529721" expanded>

At first I thought this was unnecessary because we can just use TextUi.ERROR_NO_SUCH_MODULE in the super() constructor, but after a while I realised that it's a bit more readable this way. It's a good idea.
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/91#discussion_r827569988" expanded>

Let's combine this with the fallthrough cases in lines 64-65.
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/91#discussion_r827574123" expanded>

Should we switch this to `!Objects.isNull(list)` instead for consistency with other places in the code?
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/91#discussion_r827574977" expanded>

Minor typo, steams -&gt; stream
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/95#discussion_r827721399" expanded>

Minor nitpick but let's get rid of the unnecessary capitalisation in "Flags" and "Parameters" -&gt; "flags" and "parameters". Let's also be consistent with whether the example ends with a . or not.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830547599" expanded>

I am wondering if we should make this -c instead of /c for consistency with the other arguments.

Or, since it's a compulsory argument anyway, we can also consider using `add /m MODULE_CODE NUM_MC [-d "description"]` instead.
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830547828" expanded>

Same as the earlier comment, since the grade parameter is mandatory, we can consider getting rid of the flag.

Also, we should probably support S and U as valid grades as well.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830548036" expanded>

Wondering if it would be a good idea to make this an enum instead.
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/101#discussion_r830548321" expanded>

The other line (line 35) was corrected to remove the "" from the commented out regex, but not here. Let's fix it so we don't get confused during regex testing later.

(Admittedly this problem was my fault so good that you caught that)
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#discussion_r833428323" expanded>

Seems like this section was duplicated during the merge (see lines 28-34 of the same file)
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#discussion_r833428982" expanded>

Same, duplicated section as well
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#discussion_r833429544" expanded>

This section can probably just be slotted in with the other components below (lines 33+)
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833851919" expanded>

It might be a good idea to make a sequence diagram for any command (XYZParser -&gt; XYZCommand) to illustrate this

Also, is it really true that XYZParser will call another sub-parser? Isn't all of the remaining parsing logic done within XYZParser?
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833853314" expanded>

Here we are mostly just describing what is already shown in the class diagram (XXX inherits from / implements YYY). I think it is better to be a bit more high level because otherwise we are just repeating the information again (maybe like what I did for the Data component?)
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833854016" expanded>

Can we just put in the url of the expected location of the puml file once it's committed? (`http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/AY2122S2-CS2113T-T10-3/tp/branch-A-Storage-puml/docs/Storage.puml`) Otherwise we will need to create another pull request just for it
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/109#discussion_r833855555" expanded>

I remember you mentioned something about how template objects can't be used for one of the functions, and that's why we didn't use `ListStorage&gt;T>` instead of creating 2 classes for ModuleListStorage and TaskListStorage. Maybe we can briefly mention it here in the implementation section. (Just a note for the future)
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/174#discussion_r843616108" expanded>

I think this could work? There doesn't seem to be a need to invoke `list.contains()` because we are only interested in a boolean after all.
'''
try {
    getModule(moduleCode);
    return true;
} catch (...) {
    return false;
}
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845726977" expanded>

Not really sure why there is a random bullet point here, I think it's automerge
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845728722" expanded>

Something seems to have gone wrong while automerging beyond this point. Automerge seems to have randomly duplicated or deleted certain sections and the indentation is a bit messed up also. I don't want to mark them out individually because there are quite a lot of them.
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822379345" expanded>

NoArgumentParser ensures that commands that take no arguments (like "exit") will not run if unnecessary arguments are provided (e.g. "exit hello"), since other teams might report this behaviour as a bug.
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822379817" expanded>

We could create a helper class to store all the constant strings
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822381044" expanded>

I changed it to fix #71 and also to future-proof the regex in case `add /t` and `add /m` end up having significantly different syntax.
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822382230" expanded>

I removed these because they used the old regex which I rewrote. But now I understand that your original tests were supposed to test Parser functionality alone (that is, to make sure it parses "general" regex correctly), whereas the tests I newly wrote are more specifically geared towards ModHappyParser. We can Parser unit tests again.
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822394555" expanded>

Will be resolved by #78 
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#discussion_r822394979" expanded>

Will be resolved by #77.
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825907583" expanded>

I've just tested the code, and it correctly rejects `add /t "123" /m abc`.

It's probably important to note (I also discovered this while debugging regex) that Matcher.matches() only returns true if the whole string matches, so I guess there is an implicit &hat; and $ anchor at the start and end of the regex string
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825920537" expanded>

I've decided to compromise and make `deleteTaskFromModule()` accept a `Module` object from which to delete the task. Then the logic on what to pass to this function is relegated to `execute()`.
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r826023811" expanded>

You are right, we should probably standardise it to moduleCode for all
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r826034222" expanded>

Let's have an enum describing the type of object being created by the command and make it one of the parameters. That way we won't run into problems if we add more task types.
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831903332" expanded>

Agree, I have made it --> so it is more obvious
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831904183" expanded>

Nope, this diagram is to explain an "alternative" way of implementing "general tasks" as only a TaskList, and why it is worse (because we need to interact with a Module or TaskList depending on whether it's a general task or not)
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/105#discussion_r831904484" expanded>

Same as above comment about the alternative implementation
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834858554" expanded>

We can add a sequence diagram to showcase this later on but probably in a future pull request
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834859924" expanded>

After the edits were removed, I realised that there wasn't enough to talk about for the component at all...

After looking at past semesters' DGs, I realised that some of them do indeed explain what the subclasses in each package are for and what they do. So I decided to add the content from your original PR back, otherwise there is nothing much to say for this section.
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834860467" expanded>

Actually, I think we should just summarise what the command does here instead of talking about the arguments accepted etc. So I will probably change it to something like "this feature calculates the user's GPA to 2 decimal places, based on the modules stored in the module list". Same for the tag feature section
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834863406" expanded>

We can probably move this + the sequence diagram to the implementation section under a new section like "parser implementation" later on. I will put it on the google doc so we remember
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/111#discussion_r834861308" expanded>

I thought each group name is already explained in the `option GROUP_NAME` command? Maybe, instead of making the user type every option name to find out what it does, we should list the name + explanation as part of the `option` command (no arguments) instead of just the name.

I am not sure if the help details will be too long if we decide to list all the explanations as well, because it is already quite long (3 different formats)
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/194#discussion_r846712011" expanded>

Oops good catch
</panel>

<panel  header="**54 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/69#issuecomment-1060152250" expanded>

Okay, LGTM
</panel>

<panel  header="**55 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/24#issuecomment-1062835913" expanded>

Resolved by #73 
</panel>

<panel  header="**56 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/13#issuecomment-1066229492" expanded>

Oops, forgot to close this with #73
</panel>

<panel  header="**57 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/44#issuecomment-1068678470" expanded>

Resolved by #88 
</panel>

<panel  header="**58 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/37#issuecomment-1068678773" expanded>

Resolved by #89 
</panel>

<panel  header="**59 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/31#issuecomment-1069049660" expanded>

Closed by #92 
</panel>

<panel  header="**60 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/96#issuecomment-1069050824" expanded>

Okay, looks good to merge
</panel>

<panel  header="**61 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/99#issuecomment-1073240652" expanded>

Let's merge this as a base first so that we have something to build on from here.
</panel>

<panel  header="**62 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/12#issuecomment-1073241572" expanded>

Closed by #92
</panel>

<panel  header="**63 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#issuecomment-1076337481" expanded>

Did you remember to merge the existing DG file into your own properly? There seems to be some duplicate segments and stuff
</panel>

<panel  header="**64 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/38#issuecomment-1079833067" expanded>

I guess so, we can include a tip in the UG about it too
</panel>

<panel  header="**65 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/27#issuecomment-1079833187" expanded>

Already covered by "add" and "edit" commands
</panel>

<panel  header="**66 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/119#issuecomment-1083236361" expanded>

Closed by #116.
</panel>

<panel  header="**67 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/121#issuecomment-1083290717" expanded>

Changes look good but we will probably need to do some extensive testing on the regex later on
</panel>

<panel  header="**68 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/127#issuecomment-1083322315" expanded>

LGTM
</panel>

<panel  header="**69 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/136#issuecomment-1086619528" expanded>

Adding to this issue. Currently we have already fixed the bug that allows registration of duplicate modules if you manually edit the JSON file, but I just realised that the modules' MCs are not validated (in the program, only 0-100 are allowed) so you can input negative MCs or MCs which are too big.
</panel>

<panel  header="**70 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/144#issuecomment-1086773793" expanded>

Duplicate of #165 and related bugs
</panel>

<panel  header="**71 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/146#issuecomment-1086774053" expanded>

Unable to reproduce
</panel>

<panel  header="**72 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/148#issuecomment-1086774079" expanded>

Duplicate of #165
</panel>

<panel  header="**73 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/149#issuecomment-1086774094" expanded>

Duplicate of #165
</panel>

<panel  header="**74 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/150#issuecomment-1086774216" expanded>

Not enough information to figure out what the bug is. What modules did you even have? Which task was deleted from what list?
</panel>

<panel  header="**75 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/151#issuecomment-1086774247" expanded>

Duplicate of #165
</panel>

<panel  header="**76 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/152#issuecomment-1086774304" expanded>

Yes, this is intended behaviour
</panel>

<panel  header="**77 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/155#issuecomment-1086774610" expanded>

Duplicate of #138
</panel>

<panel  header="**78 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/156#issuecomment-1086774625" expanded>

Duplicate of #137
</panel>

<panel  header="**79 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/157#issuecomment-1086774730" expanded>

Not enough information given to reproduce
</panel>

<panel  header="**80 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/147#issuecomment-1086774788" expanded>

Not enough information to reproduce
</panel>

<panel  header="**81 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/158#issuecomment-1086774841" expanded>

Duplicate of #153
</panel>

<panel  header="**82 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/159#issuecomment-1086774883" expanded>

Duplicate of #139
</panel>

<panel  header="**83 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/160#issuecomment-1086775025" expanded>

Unable to replicate.

However, if data saving is failed, the old saved file (without saved changes) will still be loaded on next app launch.
</panel>

<panel  header="**84 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/162#issuecomment-1086775117" expanded>

Duplicate of #139
</panel>

<panel  header="**85 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/166#issuecomment-1086775247" expanded>

Duplicate of #165
</panel>

<panel  header="**86 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/167#issuecomment-1086775432" expanded>

Duplicate of #154
</panel>

<panel  header="**87 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/168#issuecomment-1086775471" expanded>

Duplicate of #165
</panel>

<panel  header="**88 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/169#issuecomment-1086775489" expanded>

Duplicate of #137
</panel>

<panel  header="**89 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/155#issuecomment-1088290778" expanded>

This is not quite a duplicate, oops. But it has been fixed by #173 anyway.
</panel>

<panel  header="**90 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/9#issuecomment-1089810785" expanded>

Won't do due to time constraints
</panel>

<panel  header="**91 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/11#issuecomment-1089811107" expanded>

Won't do due to time constraints
</panel>

<panel  header="**92 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/39#issuecomment-1089811340" expanded>

Won't do due to time constraints
</panel>

<panel  header="**93 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/40#issuecomment-1089811499" expanded>

Won't do due to time constraints
</panel>

<panel  header="**94 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/33#issuecomment-1089811606" expanded>

Won't do due to time constraints
</panel>

<panel  header="**95 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/23#issuecomment-1089811818" expanded>

Won't do due to time constraints, although partially resolved by the `tag` feature.
</panel>

<panel  header="**96 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/22#issuecomment-1089811878" expanded>

Won't do due to time constraints
</panel>

<panel  header="**97 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/34#issuecomment-1089812086" expanded>

Won't do due to time constraints
</panel>

<panel  header="**98 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/36#issuecomment-1089812160" expanded>

Won't do due to time constraints
</panel>

<panel  header="**99 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/21#issuecomment-1089812224" expanded>

Won't do due to time constraints
</panel>

<panel  header="**100 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/20#issuecomment-1089812276" expanded>

Won't do due to time constraints
</panel>

<panel  header="**101 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/14#issuecomment-1089812329" expanded>

Won't do due to time constraints
</panel>

<panel  header="**102 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/18#issuecomment-1089812514" expanded>

Won't do due to time constraints
</panel>

<panel  header="**103 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/19#issuecomment-1089812622" expanded>

Resolved now that the UG exists.
</panel>

<panel  header="**104 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/25#issuecomment-1089812684" expanded>

Won't do due to time constraints
</panel>

<panel  header="**105 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/29#issuecomment-1089812752" expanded>

Won't do due to time constraints
</panel>

<panel  header="**106 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/138#issuecomment-1089813560" expanded>

Resolved by #173 (although the formatting is currently broken, I will fix it in the next PR).
</panel>

<panel  header="**107 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/140#issuecomment-1090483667" expanded>

Resolved by #175
</panel>

<panel  header="**108 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/30#issuecomment-1093547228" expanded>

Resolved by #176
</panel>

<panel  header="**109 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/43#issuecomment-1093547443" expanded>

Won't do due to time constraints
</panel>

<panel  header="**110 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/139#issuecomment-1093547771" expanded>

Resolved by #176
</panel>

<panel  header="**111 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/154#issuecomment-1093548188" expanded>

Resolved by #180
</panel>

<panel  header="**112 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/134#issuecomment-1093548689" expanded>

Resolved by #180
</panel>

<panel  header="**113 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/135#issuecomment-1093548845" expanded>

Resolved by #180
</panel>

</panel>


<panel type="info" header="### 16. WAN ..HENG `@1szheng` (33 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/26#discussion_r822677387" expanded>

The try catch block for `IndexOutOfBounds` exception will be handled by some parser under the Parser class i.e. `isValidUserIndex(userIndex)` but for expenditures instead, so need not worry about it. Once the method is ready you can update this method to call that and handle the exception that will be thrown instead.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/28#discussion_r823289721" expanded>

Consider adding a new line to remove this notice.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/51#discussion_r825477400" expanded>

Consider moving the logger to a class of its own
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/51#discussion_r825477596" expanded>

Same as above. Consider refactoring to a logger class
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/51#discussion_r825477850" expanded>

Consider moving prints and message methods to the UI class
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/51#discussion_r825478649" expanded>

Consider creating a new variable for `index - 1` to reduce recalculations
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/51#discussion_r825478689" expanded>

Consider creating a new variable for `index - 1` to reduce recalculations
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/51#discussion_r825478860" expanded>

Consider using more constants
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/51#discussion_r825478966" expanded>

Comment applies to each `assert >= 1` below as well
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/79#discussion_r827196949" expanded>

Default branch for throwing exception will be caught by line 51. Might cause an undefined `newCommand` to be returned by line 54.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/79#discussion_r827199349" expanded>

Feel that closing braces should be in new line even if method is empty
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/79#discussion_r827193875" expanded>

`Command.execute()` might throw an exception that will be uncaught
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/110#discussion_r832229175" expanded>

Should be moved into the `Implementation` section
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/112#discussion_r833070634" expanded>

Not sure if it affects, but arrow heads used in examples were solid ones `->`
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/112#discussion_r833072001" expanded>

It this an extra arrow typo? If not, there's a missing arrow somewhere as the timeline does not seem to fit
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/112#discussion_r833074696" expanded>

Unsure if footbox, the boxes below, are necessary as examples shown did not have them. Can include `!include style.puml` to remove boxes or `hide footbox`
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/112#discussion_r833080544" expanded>

Possibly extra activation as the extra "box" is used to show a method of an object calling another of its own methods. Believe that all the extra boxes below can be removed if they are not methods of the Storage class
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/112#discussion_r833083480" expanded>

If `writeToFile()` is a method of storage, it should be used with the box above i.e.
```
Storage -&gt; Storage : writeToFile()
activate Storage
Storage -&gt; PlanITarium.txt
activate PlanITarium.txt
PlanITarium.txt --> Storage
deactivate PlanITarium.txt
Storage --> Storage
deactivate Storage
```
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/112#discussion_r833086631" expanded>

Feel that an outgoing arrow to outside the boxed area would be good to show the end of the process
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/112#discussion_r833087592" expanded>

Feel that should also be facilitated by `Storage`
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/124#discussion_r834122064" expanded>

Should add parseDescription for completeness
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/124#discussion_r834122669" expanded>

Should be getDescription()
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/237#discussion_r844109447" expanded>

Accidental edit for jiarong's file
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/237#discussion_r844110067" expanded>

Phrasing should be more standardized / in-line with other component's descriptions
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/237#discussion_r844116967" expanded>

Use `There are` instead
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/237#discussion_r844117730" expanded>

Can explain the XYZCommand from the sequence diagram here.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/237#discussion_r844117812" expanded>

Can use `images/CommandFactorySequence2.png` instead with some edits.
1. to sync up the two names
2. to remove `return`
3. to add `:String`

![image](https://user-images.githubusercontent.com/69353464/162016431-f67d8e39-e349-4369-bd1d-2981ea4c528b.png)
![image](https://user-images.githubusercontent.com/69353464/162016445-e620e108-8219-4ab3-bd76-f0ca1b30e021.png)
![image](https://user-images.githubusercontent.com/69353464/162016548-dd5c9ac7-5d19-4254-b75d-459fbaecbff1.png)

</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/237#discussion_r844118180" expanded>

Can use `delimiter` over `flag` for standardization
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/237#discussion_r844118613" expanded>

Change back to `Parser.parseCommandTypes`, might be by accident
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/245#discussion_r845708396" expanded>

might want to add that the removal of delimiters is from the saved data file? was a little confused
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/245#discussion_r845711071" expanded>

May want to elaborate a little more like the reason for executing `list /g 1`? Like since its purpose is to view the entries, we could perhaps word it as "We can check the loaded data by executing..."
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/250#discussion_r846712390" expanded>

Possible grammar error on `make`?
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/250#discussion_r846712426" expanded>

Spelt as markdown
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/40#discussion_r824628317" expanded>

Thank you, will implement in future PR, will leave this PR to be focused on the bug fix
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/131#issuecomment-1079660277" expanded>

Fixes  #105
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/136#issuecomment-1079660288" expanded>

Fixes  #105
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/116#issuecomment-1079660428" expanded>

Implement the enum necessary for #102
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/222#issuecomment-1086922473" expanded>

Fixes #223
Helps #200 
Helps #203 
</panel>

</panel>


<panel type="info" header="### 17. CHUA.. HAO `@yuhaochua` (31 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/29#discussion_r824733820" expanded>

Does it make more sense for user to search for equipment via name? If so then we would need to change this. 
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/29#discussion_r824734367" expanded>

if the serialNumber already exists, should we throw an error that will be caught when AddCommand.execute() is run?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/28#discussion_r824748949" expanded>

I think we should do the error checking separately. Later on when we actually try to add the equipment in the command execution stage
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/28#discussion_r824749423" expanded>

This is done already right?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r825422284" expanded>

Maybe we can define this portion in a prepareUpdate method instead?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r825422668" expanded>

Shouldn't the argValue be from delimiterPos + 1 till the end?
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r825442399" expanded>

We cannot use the single quotes for string values. Maybe we can change all cases to have double quotes instead?
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r825442500" expanded>

This line should be deleted?
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r825443350" expanded>

the serialNumber here is not defined
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r826948482" expanded>

There is a missing case for ListCommand.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r826949147" expanded>

This method does not split the string properly into the individual attributes of the equipment
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827883366" expanded>

Yes sure that'll work! But just have to define it before passing it into the constructor, thanks!
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827889789" expanded>

I'm fine with either implementation! My bad, actually I was referring to shifting the whole switch case statements below into a prepareUpdate method so it doesn't get too long here. 
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830720788" expanded>

Yea I think we should rename it too
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830725620" expanded>

Correct me if I'm wrong, but doesn't equipmentList.putIfAbsent() already check for whether the equipmentList contains the serial number? So technically we do not need the if condition on line 22?

Regarding the second else if, I think we can use a guard clause for better code quality.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830726042" expanded>

I think we can have a error message here for error in saving the file. 
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830726166" expanded>

I think we can refactor the message here into a constant?
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830727207" expanded>

Can we catch the DuplicateSerialNumberException in the storage.loadData() method instead? Then I think we can simply skip the line of data with duplicate serial number and continue with adding the rest.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#discussion_r833440920" expanded>

I think if the point of using this Pair&gt;String, ?> was to allow us to put the equipmentType and cost as EquipmentType and Double objects respectively, then we will need to change ModificationCommand too? We will have to declare those attributes as their respective classes right?
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#discussion_r833443170" expanded>

Why are we type casting this as string, if the point of the Pair&gt;String, ?> was to enable us to put the EquipmentType class object directly into the Pair?
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#discussion_r833443793" expanded>

Same as above, but this one is Double.
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#discussion_r833511642" expanded>

I think if the value that we are getting here from `updates.getValue()` has class of `EquipmentType`, then we do not need to convert it anymore? We can directly pass it into `updatedEquipment.setType` probably.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/66#discussion_r833514620" expanded>

Yes, I think this should solve the problem of being unable to specify EquipmentType in lowercase.
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/116#discussion_r842421708" expanded>

Can I change this to use extractArguments instead if I want to retain the tags?
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/124#discussion_r845255277" expanded>

I think we could refactor this static String into Command instead? Since other commands might also use it such as CheckCommand
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/124#discussion_r845277079" expanded>

Oh and, I think maybe we need to change CheckCommand as well? Because there is Pair being used there as well and the date is being passed to EquipmentManager through CheckCommand also
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/137#discussion_r846646220" expanded>

Thanks for adding on to the explanation for this portion!
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/138#discussion_r846646839" expanded>

I think for this, we can write as v2.0?
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/138#discussion_r846646932" expanded>

I think for list and add equipment, we can write as v1.0?
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/138#discussion_r846647002" expanded>

I think for this remaining 3 user stories, we can fill in as v2.1?
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/141#discussion_r846701654" expanded>

Actually, I removed these catch statements in CheckCommand because these exceptions shouldn't be thrown to Parser?
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/119#discussion_r844895286" expanded>

Okay, will change this to `ONLY_SN_ACCEPTED`!
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/119#discussion_r844909889" expanded>

Yes that makes sense, will make the changes accordingly.
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/65#issuecomment-1076545855" expanded>

It was because I did not catch the IllegalArgumentException which happens when I try to list an EquipmentType which does not exist. I am able to fix it already, but was suggesting maybe you can extend the lowercase support when specifying EquipmentType to the list command as well!
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/65#issuecomment-1076583182" expanded>

Yes, that is the fix expected, thank you!
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/102#issuecomment-1086885141" expanded>

Other fields such as cost and name can be updated, will look into fixing this. 
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/90#issuecomment-1086892578" expanded>

Will throw an exception when there are missing attributes detected, before proceeding to parse "Speaker c" as type.
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/112#issuecomment-1087199854" expanded>

LGTM!
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/114#issuecomment-1088327464" expanded>

> LGTM. Just to confirm my understanding, if there is less than 6 attributes to be added, it will fail early on. In `prepareModification`, then the check is done for 6 unique argument tags?

Almost right, the check for 6 unique argument tags is done with the `checkAttributes` method in AddCommand.
</panel>

</panel>


<panel type="info" header="### 18. NG Y..HENG `@ngys117` (29 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/80#discussion_r823297139" expanded>

isEmpty() can also be used to check for null, might make it more readable than just putting the variable name
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/83#discussion_r825394591" expanded>

Perhaps Objects.isNull(object) can replace Objects.equals if just checking whether the object is null. Also, not directed only at the usage here, but is there a need to assign null to a constant?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/83#discussion_r825397325" expanded>

Regex works when adding tasks and ignores description and working time, but fails when trying to add modules using the following format `add /m MODULE_NAME`. Not sure if intentional.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/86#discussion_r825647132" expanded>

Perhaps it will be better to have two different methods, one for deleting general tasks and another for deleting module tasks. Then, the decision on which to delete can be handed over to the execute method.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/92#discussion_r827200934" expanded>

I think we have to import java library before custom classes
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/92#discussion_r827201345" expanded>

Same comment on import order
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/92#discussion_r827201943" expanded>

Maybe using booleans would be better to reduce nesting. Here's a quick modification I did:
[EditCommand.zip](https://github.com/AY2122S2-CS2113T-T10-3/tp/files/8255488/EditCommand.zip)
Not sure if this would be better, as it will make the execute implementation look different from the other commands' execute implementation.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830750077" expanded>

I think we are importing java classes before custom classes?
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830750285" expanded>

Same comment on import order
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830750325" expanded>

Same comment on import order
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830753557" expanded>

COMPLETED_TASK_ONLY or SHOW_COMPLETED_TASK_ONLY sounds better instead of COMPLETED_TASK_SHOWN.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830753870" expanded>

I'm guessing there might be future configuration groups that use NEW_VALUE other than boolean type? If not, maybe BOOLEAN might be clearer.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830754114" expanded>

I would suggest replacing it with `"List of configuration groups:\n"`
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830754802" expanded>

Maybe `"Format to check configuration settings: option\n"` to keep the help cohesive?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830754856" expanded>

Same formatting issue as `option`
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830756323" expanded>

Also, maybe the `Format to check all valid NEW_VALUE for CONFIGURATION_GROUP: option CONFIGURATION_GROUP\n\n"` might sound better
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830757623" expanded>

Should add the option command in here
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/102#discussion_r830755747" expanded>

Also, would it be possible to map the configuration group to a number instead, so the user can just do 1=true to enable COMPLETED_TASK_ONLY, while the reply would remain the same as what it is currently.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/108#discussion_r832854908" expanded>

Should PrintStream be considered as a composition as well if Scanner is? PrintStream and Scanner should not exist if TextUi does not exist is what I'm understanding.
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838285266" expanded>

I believe it should be Displays not Display as part of convention
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838285783" expanded>

Saves instead of save
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838288801" expanded>

Same punctuation suggestion as line 39 in TaskList, as well as capitalize the first letter in the description.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838288871" expanded>

I think there should be punctuation (full stop) at the end of each parameter description?
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838289104" expanded>

Punctuation and capitalization as mentioned above
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838297323" expanded>

Could you help capitalize the first letter of the  parameter descriptions? Must have been missed before.
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838297931" expanded>

Capitalize the first letter of the descriptions here as well perhaps
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838299855" expanded>

Maybe let's not use enum and type enumeration out in full?
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838304365" expanded>

Index isn't really the same as task number. Maybe change the description to `Index of task to be added with tag.`
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r838304808" expanded>

Index isn't really the same as task number. Maybe change the description to `Index of task to be added with tag.`
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#discussion_r826115831" expanded>

Does anyone have suggestions on where I could print out the note on compulsory and optional parameters?
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826825691" expanded>

I need to implement a getter method for the TaskList class if I want to use .clear() here I believe. Shall I implement it or was there a reason why it was not added?
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826830089" expanded>

Alright, I added the getter method and use .clear() to remove all general tasks.
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#discussion_r826835704" expanded>

NULL_FIELD (line 24) does not seem to be used. Shall I remove it?
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826822573" expanded>

Yup, just using moduleList.clear() here works, thanks for pointing it out.
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#discussion_r826853967" expanded>

Updated
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#discussion_r826856333" expanded>

Sorry, I don't quite understand this. Could you provide an example within this context?
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#discussion_r827068771" expanded>

I see. I changed it so that the note only appears when `help` is called.
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/100#discussion_r830598003" expanded>

Good catch, updated the regex.
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/100#discussion_r830598023" expanded>

Updated the regex to accept only one word wrapped around the quotes, no white spaces allowed.
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r832145061" expanded>

Alright, removed it
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r832155224" expanded>

Good catch, fixed it
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r832146505" expanded>

Missed that, thanks for pointing it out. Made it so that it reflects in Tag.puml
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/106#discussion_r832162388" expanded>

Should I change these to the link that the rest of you are using? Or is this better?
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/110#discussion_r832872027" expanded>

I don't think we should as different commands seem to store the result in different locations. I think it is sufficiently shown in the CommandResult(result:String) constructor in the CommandResult class
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#discussion_r837420287" expanded>

That's a good idea, with a loop the user won't have to retype the command if they mistype yes or no.
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#discussion_r837570219" expanded>

Ok, I instantiated a new TextUi Object to get inputs and print outputs. Edited the DG diagram for deleteCommand, however not sure if a dependency should be shown for the high level components diagram. Any suggestions?
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841341734" expanded>

Ah, missed the edit bug. Thanks for the catch.
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841341935" expanded>

Yes, I think we agreed to remove the message as it does not add value to user
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841341648" expanded>

That is actually a good point, but there would need to be refactoring for every other Command that uses getModule as well. I think the original idea was that the logic for validation should be done by Command instead of ModuleList, but that is not the case for TaskList. (Maybe I remembered it wrong)
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#discussion_r841401707" expanded>

I'll do this in a different PR
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/174#discussion_r841437732" expanded>

Any suggestions on a better implementation here?
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/174#discussion_r841438953" expanded>

Removed this because getTask already does the validation.
</panel>

<panel  header="**53 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/75#issuecomment-1062612668" expanded>

LGTM
</panel>

<panel  header="**54 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/76#issuecomment-1062646974" expanded>

Closes #10, closes #35, closes #49
</panel>

<panel  header="**55 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/83#issuecomment-1066295423" expanded>

LGTM
</panel>

<panel  header="**56 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/88#issuecomment-1067000265" expanded>

Closes #60
</panel>

<panel  header="**57 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/89#issuecomment-1067520671" expanded>

Closes #62 
</panel>

<panel  header="**58 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/100#issuecomment-1072585100" expanded>

Closes #17, #28, #85
Fixes #98
Maybe overlaps with #38
</panel>

<panel  header="**59 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/38#issuecomment-1075908490" expanded>

Could this be considered as implemented by the tag function?
</panel>

<panel  header="**60 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/115#issuecomment-1081358313" expanded>

Fixes #117 and #120 
</panel>

<panel  header="**61 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/122#issuecomment-1082642074" expanded>

Even when you have tasks stored under a different module/under general tasks
</panel>

<panel  header="**62 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/issues/166#issuecomment-1086775191" expanded>

The cause of this issue is likely due to not checking whether targetModule is null before calling getTaskList.
![image](https://user-images.githubusercontent.com/70083643/161411753-47202ddf-02f4-40b3-a58f-5e6441734444.png)

</panel>

<panel  header="**63 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/171#issuecomment-1086840414" expanded>

Fixes #122, #137, #153, #164, #165
</panel>

<panel  header="**64 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/200#issuecomment-1094486170" expanded>

Table looks good
</panel>

</panel>


<panel type="info" header="### 19. FLOR..EIRA `@wraineflores` (26 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r824407500" expanded>

patientLists for arrays. Does it need to be plural, right?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r824410683" expanded>

Can we change the name to be plural since it is an array? Like arrayOfInputParameters or something?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r824414232" expanded>

is it parserCommand instead of commandParser since it is a noun? Or does it need to be changed to sound like a verb such as parseNewInput?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/37#discussion_r825810598" expanded>

int or double better? Can we specify the variable name from dosage to milligramDosage?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/37#discussion_r825812438" expanded>

Looks great. It's good to go!
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827516581" expanded>

There's no need for these variables to be in the Doctor class as it is already in the superclass Person 
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827556933" expanded>

Just wondering, why did you return an array of strings instead of just returning back the String?
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/72#discussion_r831804860" expanded>

Do we need to separate this into new lines '\n'? 
Cos currently we need to have a new line in order for printParagraph() to work
And toString does not have any new lines in it, right?
So that the output print would not exceed 120 characters?
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/72#discussion_r831805991" expanded>

Same question about '\n' as Doctor.toString
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/72#discussion_r831806248" expanded>

Same Same question about '\n' as Doctor.toString
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/72#discussion_r831808359" expanded>

Cont means Continue, right? Or is there a better name?
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/72#discussion_r831817087" expanded>

I see I see
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/74#discussion_r832560119" expanded>

Looks good!
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/75#discussion_r832564710" expanded>

Looks good!
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832574270" expanded>

Looks good!
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/80#discussion_r832921143" expanded>

Shouldn't it be ui instead of UI? Or is there no difference?
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/85#discussion_r833180101" expanded>

Should we just put everything in String? Or nah?
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/85#discussion_r833187638" expanded>

Why Create two different exceptions when both have nothing? This one minor lol
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/86#discussion_r833230275" expanded>

application/app*
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/96#discussion_r835683564" expanded>

Why is it List instead of AppointmentList?
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/96#discussion_r835683610" expanded>

Why is it List instead of AppointmentList?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/95#discussion_r835704359" expanded>

Replace all the // lines with 
/*
all the codes
*/
so that it could pass the check style before we merge
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/115#discussion_r835979677" expanded>

Looks Good! 
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/114#discussion_r835980537" expanded>

Looks Good! If others are okay, can merge already
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/117#discussion_r835980726" expanded>

Resolve conflict first with the current pushed PR for some classes
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/183#discussion_r845098990" expanded>

Maybe extract this as a method if it's possible? so that our case switch isn't as long
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/50#discussion_r827749226" expanded>

alright will remove "1," from add medicine
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/50#discussion_r827904500" expanded>

Not really haha
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/50#discussion_r827906285" expanded>

I can but it will be really messy, especially next time when we add way more help statements so I'll keep it for now
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/99#discussion_r835851760" expanded>

It's not but I need to put it there cos y'all implemented abstract in List so those that extended List.
Those "left blank" method essentially doesn't return anything. But can't remove it cos it's abstract subclass implementation

</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/99#discussion_r835851775" expanded>

In PatientList/DoctorList/MedicineList, it prints out the filtered Patient/Doctor/Medicine (zero to many) based on the attribute the user wants to filter it by. There are methods in the respective List classes
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/113#discussion_r835977565" expanded>

Alrighty!
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/124#discussion_r838522043" expanded>

Supposed to be Manager. Arraylist is the default. Didn't notice the change 
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/99#issuecomment-1079832609" expanded>

Linked the 3 Finder classes with Manager class
Request for review
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/138#issuecomment-1086758076" expanded>

We don't allow special characters. That includes numbers
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/140#issuecomment-1086758297" expanded>

In Singapore, the highest was 113 years old and may not be applicable for now
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/143#issuecomment-1090895912" expanded>

@tanweili I think we just remove this view parameter feature from the UG (Doctor, Patient & Medicine classes) permanently so that users will not get the wrong ideas. We'll only have the find parameter feature as a focus. View Doctor, View Patient & View Medicine is to list all instead
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/153#issuecomment-1094243003" expanded>

Fixed
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/168#issuecomment-1094555585" expanded>

Done 
</panel>

</panel>


<panel type="info" header="### 20. SYED..ASAN `@OzairHasan` (25 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/42#discussion_r828938641" expanded>

I really like the use of javadoc headers throughout the files. Very helpful.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/31#discussion_r828941274" expanded>

Good use of named constants. 
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/31#discussion_r828944168" expanded>

Good use of assertions to check assumptions.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r833976174" expanded>

I believe it would be worthwhile to add activation bars to this diagram as it does not add to its complexity, while making things clearer.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r833976439" expanded>

Good use of named constants.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r833977633" expanded>

Its very good that you try to cover quite a few test cases.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#discussion_r834095126" expanded>

I like the simplicity and clarity of the Class diagram. 
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#discussion_r834096975" expanded>

Perhaps a sequence diagram could be included to further elaborate on the operational design of the StudyManager component.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r834098594" expanded>

Very clear explanation to the user. Well done.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r834100121" expanded>

Good use of assertions to check assumptions.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r834100502" expanded>

Is it possible to remove the nesting here?
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r834101650" expanded>

Its good that you have a wide usage of tests to cover most of the code functionality. 
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/69#discussion_r834103746" expanded>

Detailed explanation discussing functionality of the expense component. Good job.
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/69#discussion_r834104543" expanded>

Clear colourful diagrams utilized.
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/69#discussion_r834106554" expanded>

For the method calls within the same entity, it might be better to show the activation bar for the methods as it would only improve clarity of the diagram and not add too much complexity.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837326554" expanded>

Good use of exceptions as always. 
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837327962" expanded>

Good use of Junit tests.
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837329350" expanded>

Very clear examples of usage in the UG.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/78#discussion_r837333797" expanded>

Good updates to the existing sequence diagrams.
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/78#discussion_r837334221" expanded>

Excellent use of javadoc headers
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/78#discussion_r837335115" expanded>

I think for the final iteration, we should standardize how we log our messages.
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/81#discussion_r838385096" expanded>

Good use of tables to make it easier to understand and read the UG.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842665202" expanded>

Good use of constants.
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842666139" expanded>

Good attempt at resolving the delimiter issue.
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/132#discussion_r845064967" expanded>

Very good diagrams
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/77#discussion_r837336051" expanded>

Ill take note and make the required edits in the next PR. Thanks.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845337662" expanded>

Addresses both. Need to compare userInput and Command type in lower case and wanted to extract a method (since it is common functionality).
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845337898" expanded>

Thank you for the suggestion.
</panel>

</panel>


<panel type="info" header="### 21. BAI .. YAO `@shunyao643` (25 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/24#discussion_r822601219" expanded>

Can I take it that you'll be doing the [conversion](https://www.baeldung.com/java-string-to-enum)? Since I'm passing you an ArrayList of Strings?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/24#discussion_r822604820" expanded>

Want to use `System.lineSeparator()` instead of `\n`?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/24#discussion_r822605678" expanded>

Let's use `System.lineSeparator()`?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/29#discussion_r824724681" expanded>

`putIfAbsent()` instead?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/29#discussion_r824733032" expanded>

Do we need `.equals` for this instead?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830592842" expanded>

Oh I've been meaning to ask this, want to name this `DuplicateSerialNumberException`? So it's clearer
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830593385" expanded>

Maybe this part can be less verbose? E.g. `String serialNumber = equipment.getSerialNumber();`

Also, do we need the second `else if`? Since it's the other condition anyway - I'm not very sure on this w.r.t coding standards.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830593631" expanded>

Do we know what exactly can throw the IOException? Like is it from `gson.fromJson`? If so the IOException can be more descriptive of the error and suggest how to resolve it.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830593858" expanded>

Likewise, see above comment.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r831336654" expanded>

What happens if there is indeed a `DuplicateSerialNumberException`? Are the earlier equipment added? If so, how do we want to handle this case? @Bryan-BC @yuhaochua 

I'm thinking we can just reset equipmentManager or perhaps print a message telling the user this?
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r831337484" expanded>

Let's go back to `equipmentManager` for this?
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r831340641" expanded>

Good catch!
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/59#discussion_r831365359" expanded>

I tried doing this but the CI checks will whine about it. Let's leave it verbose?
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/57#discussion_r831421790" expanded>

Did you mean ModificationCommand?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/57#discussion_r831425962" expanded>

You can just do `assertTrue `and `assertFalse`!
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/58#discussion_r831428030" expanded>

Just use a normal for loop instead?
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/58#discussion_r831428909" expanded>

Would it be better for the Parser object to be outside of the while loop? If it's here, will we be creating many iterations of it?
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/119#discussion_r843559440" expanded>

You might need to adjust this based on the logic in the other comment further down.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/119#discussion_r843580159" expanded>

Line 83 is unreachable if you assert that `argType.equals("s")` in line 79. I do think the assertion is a good idea though, so maybe you'd like to just go directly to `return argValue` after line 79?
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/119#discussion_r843581862" expanded>

Want to use the `ONLY_SN_ACCEPTED` string in `DeleteCommand` you previously defined?
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/118#discussion_r843586825" expanded>

Maybe you want to do `commandStrings.get(0)` earlier on?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/135#discussion_r846447514" expanded>

Thanks for catching this one! I missed this out earlier.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/135#discussion_r846452766" expanded>

Cheers for helping me remove this!
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/135#discussion_r846459139" expanded>

Great idea with this!
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/139#discussion_r846649043" expanded>

Cheers, thanks for updating!
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827875489" expanded>

Debugging this now
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827875674" expanded>

My bad, missed this out!
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827875868" expanded>

Thanks!
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827876282" expanded>

Yep, will fix!
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827880356" expanded>

Should I pass in a serialNumber into the constructor? Since any update will require that anyway.
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827880560" expanded>

Cheers, will fix
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827883976" expanded>

My original thought process for this was to go with keeping the arguments as is because we don't know what order the arguments could be in, so I will have to iterate through all of them anyway. 

If we're looking to implement it with serialNumber in constructor I think I'll need a prepareUpdate method to find it, otherwise I'm thinking at the end of the for loop, I throw an exception if there isn't such a serialNumber found. Do you have a preference for either implementation? @yuhaochua 
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r827890612" expanded>

My bad haha, missed out quite a lot stuff trying to push this one out
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/31#discussion_r828085369" expanded>

Okay, I've thought about the constructor part. I think whichever class is handling the duplicate entries (e.g. two purchase dates) should also handle missing serial number.

Sure thing, I can refactor prepareUpdate
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#discussion_r833501540" expanded>

It's very strange: I need to explicitly cast it to be a `String` so that it can then be converted to `EquipmentType`. I haven't managed to found a better workaround than this!
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#discussion_r833502962" expanded>

Yeah, the first String is the key identifier right? The second one is a wildcard so it can support any type, including Double and EquipmentType.
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/124#discussion_r845283764" expanded>

> I think we could refactor this static String into Command instead? Since other commands might also use it such as CheckCommand

Sure, sounds good
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/124#discussion_r845285681" expanded>

Perhaps all the invalid messages can be moved to Command?
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/137#discussion_r846650374" expanded>

It was originally for that, but I've modified and retained it here just as an additional test. It's expected that a command &gt;code>list t/\`SPEAKER\`&gt;/code> will return the ArrayList of &gt;code>"list"&gt;/code> and &gt;code>t/\`SPEAKER\`&gt;/code>. This is to be processed by `parseCommand`. 
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/24#issuecomment-1064883524" expanded>

Just watched today's lecture, maybe you can include [Assertions](https://nus-cs2113-ay2122s2.github.io/website/schedule/week9/topics.html#w9-3-assertions) to check that what I passed you is correct? E.g. length of arraylist
</panel>

<panel  header="**41 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/10#issuecomment-1070975635" expanded>

Moving this to v2.0: we can do dates here
</panel>

<panel  header="**42 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/49#issuecomment-1072680828" expanded>

@yuhaochua Right now I'm thinking we can have:
1. Top-level "help": just print one-line descriptions for each of the supported commands, perhaps store this in each command class as _help string short_.
2. Command-specific help: e.g. "help add" to print extended multi-line descriptions for each of the supported commands, maybe as _help string long_.

Are there any others you are thinking of? 
</panel>

<panel  header="**43 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/50#issuecomment-1075012609" expanded>

This will not be necessary if `prepareAdd` is fully deprecated
</panel>

<panel  header="**44 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/61#issuecomment-1075013509" expanded>

Hang on, possible bug with parsing upper/lower-case type enum
</panel>

<panel  header="**45 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/61#issuecomment-1075345429" expanded>

Bug should be fixed
</panel>

<panel  header="**46 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/64#issuecomment-1075516102" expanded>

Please feel free to add on wherever you think its necessary, especially w.r.t the Architecture segment!
</panel>

<panel  header="**47 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/65#issuecomment-1076543566" expanded>

Can you be more specific as to what input you tried that resulted in the bug? I'll work off it to see how it can be fixed.
</panel>

<panel  header="**48 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/65#issuecomment-1076570108" expanded>

This is the fix expected, yes?
</panel>

<panel  header="**49 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#issuecomment-1079017199" expanded>

closes #51 
</panel>

<panel  header="**50 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/77#issuecomment-1084781327" expanded>

Unable to reproduce. Possibly not a bug, rather something went wrong with input on the user's end?
</panel>

<panel  header="**51 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/110#issuecomment-1086879288" expanded>

This is a feature.
</panel>

<panel  header="**52 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/108#issuecomment-1086880401" expanded>

Originally, this was not implemented as the entire file will need to be rewritten every time the save occurs. 

After reconsidering the auto-save and its efficiency, we will have it auto save every 5 commands, regardless of whether any actual changes happened.
</panel>

<panel  header="**53 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/106#issuecomment-1086881796" expanded>

![image](https://user-images.githubusercontent.com/63784032/161433021-de6eac75-2bc5-446b-980e-19efacc78508.png)

Assumed that user is referring to this. Will update.
</panel>

<panel  header="**54 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/109#issuecomment-1086882151" expanded>

Proposed fix will only take the serial number as input, ignoring all other inputs.

closes #105 
</panel>

<panel  header="**55 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/105#issuecomment-1086882364" expanded>

duplicate of #109 
</panel>

<panel  header="**56 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/104#issuecomment-1086882739" expanded>

Working as intended. The last occurrence of a duplicated attribute will be used for the update in the command.
</panel>

<panel  header="**57 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/103#issuecomment-1086883344" expanded>

This is a new feature request. Will be worked upon for v2.1
</panel>

<panel  header="**58 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/101#issuecomment-1086883711" expanded>

Duplicate of #107 
</panel>

<panel  header="**59 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/91#issuecomment-1086884378" expanded>

Duplicate of #100 
</panel>

<panel  header="**60 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/100#issuecomment-1086884441" expanded>

Parser did not parse `.`. Will be fixed in v2.1
</panel>

<panel  header="**61 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/99#issuecomment-1086884726" expanded>

Duplicate of #102 
</panel>

<panel  header="**62 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/98#issuecomment-1086885731" expanded>

Does not make sense for the use case - no equipment will cost that much. Currently supports up to cost of $10m.

User guide will be updated to reflect this.
</panel>

<panel  header="**63 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/97#issuecomment-1086885896" expanded>

Duplicate of #100 
</panel>

<panel  header="**64 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/96#issuecomment-1086886041" expanded>

Duplicate of #106
</panel>

<panel  header="**65 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/109#issuecomment-1086886345" expanded>

Bug extends to check command as well.
</panel>

<panel  header="**66 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/109#issuecomment-1086887960" expanded>

Update: delete will now only accept one tag only, and it has to be serial number. 
</panel>

<panel  header="**67 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/94#issuecomment-1086889190" expanded>

Duplicate of #100
</panel>

<panel  header="**68 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/93#issuecomment-1086889641" expanded>

Working as intended. 
</panel>

<panel  header="**69 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/92#issuecomment-1086890861" expanded>

Intended for user to follow the syntax. Error message will prompt the correct format.
</panel>

<panel  header="**70 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/90#issuecomment-1086892268" expanded>

Parser currently parses "Speaker c" as type, so the command fails. 
</panel>

<panel  header="**71 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/86#issuecomment-1086892679" expanded>

Duplicate of #90 
</panel>

<panel  header="**72 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/80#issuecomment-1086894633" expanded>

Will update user guide.
</panel>

<panel  header="**73 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/114#issuecomment-1087899795" expanded>

@Bryan-BC please take a look and merge if you can!
</panel>

<panel  header="**74 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/95#issuecomment-1087991511" expanded>

Implementation will need to be decided upon for delete command as well - please see Telegram discussion 
</panel>

<panel  header="**75 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/120#issuecomment-1090071103" expanded>

Additional work to be done: update final regex with test cases on regex101.
</panel>

<panel  header="**76 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/132#issuecomment-1093352479" expanded>

Seems like I've found the issue - I was using the old logic of checking against the next regex when the new backtick approach allows for a less restrictive match. 
</panel>

<panel  header="**77 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/10#issuecomment-1094079369" expanded>

Rescoped to just save the date
</panel>

<panel  header="**78 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/85#issuecomment-1094101063" expanded>

Resolved by #136 
</panel>

<panel  header="**79 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/143#issuecomment-1094164640" expanded>

closes #140 
</panel>

</panel>


<panel type="info" header="### 22. WANG..XUAN `@BotBw` (24 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824348932" expanded>

Maybe need to check whether the index is valid or not and throw an exception if invalid
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824349522" expanded>

> I think user input should be handled in the controller class

Same thought here.

</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824349901" expanded>

Need to handle invalid input by throwing an exception.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824350177" expanded>

Should be something like `dishes` or `dishList`.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824351549" expanded>

Dish should have a getter already?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/24#discussion_r824353758" expanded>

missing break statement.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/36#discussion_r826562370" expanded>

Only `OperationTerminationException` here
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/36#discussion_r826563052" expanded>

return true here?
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/36#discussion_r826564239" expanded>

this should be something like `addMultipleDish`?
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826644774" expanded>

User might crash the whole program here if we use assert?
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826697821" expanded>

Need to delete this
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826701585" expanded>

better to use `logError` here? Also okay if we don't
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r828034478" expanded>

List&gt;T> should be List&gt;Dish>
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r828036858" expanded>

no need the `= null` part
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/59#discussion_r831776305" expanded>

Here should be the same stream for different calls?
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/59#discussion_r831778214" expanded>

ah i see, thought i needed to read one by one
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833119467" expanded>

1. maybe add a `getManager()` in `DishController.java` i.e. need to use the same `DishManager` instance as the `DishController` instance of `MainManager` instance.
2. Cannot assert here, use exception or other method to assure valid input.
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833128669" expanded>

Same as above, should use the same `DishManager` instance.
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833133949" expanded>

Same here, if you are using dish index, need to geet the same `DishManager`(and its `dishes`) .
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/75#discussion_r834069751" expanded>

ah I alr replaced all `new DishManager()` with `DishManager.getInstance()`

fetch and solve the conflict and this should be fine
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834947574" expanded>

> so technically, you can just check for name.isEmpty() in the constructor and throw IllegalArgumentException there, dunnid a extra method to check valid name.

still need the boolean there cuz I used `isValidName` for some assertion, maybe only change to `name.isEmpty()`?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834952488" expanded>

> > > so technically, you can just check for name.isEmpty() in the constructor and throw IllegalArgumentException there, dunnid a extra method to check valid name.
> > 
> > 
> > still need the boolean there cuz I used `isValidName` for some assertion, maybe only change to `name.isEmpty()`?
> 
> I think we can still use name.isEmpty() for assertions, but then the JUnit tests I encountered some problems with our tests so might have to change that part
> 
> But assertions shld be fine by using `assert !(name.isEmpty())`

I guess that's I tested null value haha (i ll delete that later), then it's fine.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/94#discussion_r835244575" expanded>

this should be an association rather than a member?
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/95#discussion_r835846178" expanded>

no underscore
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/20#discussion_r823667682" expanded>

> the name i mean

Ahh thx
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/61#discussion_r832068909" expanded>

> I think the FILE string needs to have the extension as well (e.g. dish.txt)

It's stored in binary so I'm not sure how to name it. I can change it later.
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/61#discussion_r833027384" expanded>

> I think it's .bin
> 
> But for bin file is it we can just pass in the object to store like that and it will work? I nvr rly work with bin file that often so I'm not sure haha

make sense, maybe we decide later? 
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/82#discussion_r833898877" expanded>

This function is only used (and needed) in JUnit test.
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/81#discussion_r834067333" expanded>

ahhh didn't pay attention to that. will be modifying soon
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/150#discussion_r841433985" expanded>

You are correct!
I renamed it already.
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#issuecomment-1064720676" expanded>

Quite nice, remember to link issues in the right-hand side `development` bar.
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/29#issuecomment-1066049535" expanded>

> @wang1351 @Lim-Shi-Han @BotBw will need yall to update your controllers to make use of this new way of getting input.

noticed
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/35#issuecomment-1066510964" expanded>

should we deal with invalid input by throwing an exception (like IllegalArgumentException) at entities level and catch that exception at child controller level? (I print the message saying that the input is not valid, then return false in optionSwitcher to let user select the option and input again)
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/41#issuecomment-1067554326" expanded>

> oh there was an extra bracket oops but nvm i will fix next pr.

ahhh, spot that just now, thx
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/46#issuecomment-1067648304" expanded>

> why not make the logger a static variable of the Controller class? then the logInfo (and logError etc... i cant rmbr all the levels of logging) methods can go into the Controller class as well.
> 
> if we want to show the class name, i think java has a way of getting that.

Yup log print the class name and the function calling it. I don't want to modify others' code (in case something goes wrong) so I added a logger here. 
And I prefer creating a global Logger class as Shi Han said so I close this pr first.
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/80#issuecomment-1076996976" expanded>

same as `all.puml`, i ll merge its content to `all.puml` and delete this 
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/92#issuecomment-1078652043" expanded>

> why controller need to be singleton?
> 
> there shouldnt be a need for singleton controller. @BotBw

Ahh true
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/135#issuecomment-1094229544" expanded>

Simply mark the dish by appending "(deleted in menu)"
Just to notify the owner, the price will still be calculated since the dish was ordered before deletion.

Order:
<img width="395" alt="image" src="https://user-images.githubusercontent.com/67575050/162611867-9e751c2d-3bbc-4851-8ae8-07ed0d424720.png">
After dish 1 and dish 2 get deleted:
<img width="369" alt="image" src="https://user-images.githubusercontent.com/67575050/162611986-b6b95011-a5fd-4155-9c26-94de51298a90.png">

</panel>

</panel>


<panel type="info" header="### 23. NG Z..NDON `@glendonnotglen` (22 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827088905" expanded>

can consider using another variable name rather than just c? maybe use `Command command = Parser.parseCommand(input, itemList);`
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827097131" expanded>

I think theres a typo here since its supposed to be logical OR rather than bitwise OR? 

Can also consider abstracting this condition inside a method perhaps

boolean CheckOutOfBounds(int positionToDelete, int listSize) {
return positionToDelete + 1 &gt;= 0 | positionToDelete + 1 > listSize;
}

such that this if condition will then be if (CheckOutOfBounds(positionToDelete, itemList.size()) {...}
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832265722" expanded>

Must remember to remove this comment to conform to coding standards before release for v2.0
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832270746" expanded>

Great use of an assertion here!
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832272677" expanded>

need to use all caps for all final variables. e.g EXPENDITURE_FLAG
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832279751" expanded>

Should use a final variable instead of a magic literal here
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832283989" expanded>

should this condition be > 0 instead of >= 0? since u threw exception for &gt;= 0
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832285013" expanded>

Can consider using final variable instead of magic literal for "time"
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r832288358" expanded>

Can consider using final variables for these case statements as well (the TA commented on my iP code for coding similarly to urs)
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833453227" expanded>

Remember to add a new line at the end of the file :)
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833455030" expanded>

New line at the end of the file here as well! 
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/77#discussion_r836497160" expanded>

Remember to remove these comments before v2.0
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/77#discussion_r836499493" expanded>

Can change to something like "Returns true if program should exit. False otherwise" for greater clarity.
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/77#discussion_r836520286" expanded>

Similar to above comment, maybe can write "returns true if program should exit. False otherwise" for clarity
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/77#discussion_r836524959" expanded>

Maybe can change to something like indexAsString for clarity
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/77#discussion_r836533553" expanded>

I think can abstract this if condition in another method for clarity
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837028953" expanded>

Can add an error message inside this exception?
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837029006" expanded>

SQL?
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837029395" expanded>

SQL?
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837029720" expanded>

I think can abstract out this if-condition

</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/154#discussion_r841342326" expanded>

Maybe can consider making this function a boolean instead?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/201#discussion_r846824077" expanded>

Typo in the warning message here
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/162#discussion_r843027696" expanded>

Used try-catch to handle out of bounds indexing, in line with other delete commands. Tidies up unused code
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/45#issuecomment-1068871669" expanded>

Fixed
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/130#issuecomment-1086776170" expanded>

Reviewer has entered the code wrongly by wrongly adding a space - '/ cl' and '/ bal' instead of '/cl' and '/bal'
</panel>

</panel>


<panel type="info" header="### 24. MOHA..ARIF `@shxr3f` (21 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r823329634" expanded>

Needs break after this case.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r824464494" expanded>

I think naming it patients would be more appropriate
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/48#discussion_r827659492" expanded>

the else has to follow after the if statement closing brackets
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827661408" expanded>

i think its this version, cuz the app needs the view all doctors and view a particular doctor fn
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827729394" expanded>

hi anvitha, i believe you are missing the toString method under the doctor class!
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/50#discussion_r827740880" expanded>

medicine the user doesnt have to give the initial id, the method will auto assign
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832832728" expanded>

Great way of implementing the find method!
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/77#discussion_r832870260" expanded>

I think there is a issue with this JUnit Test, you will have to create a new test class since validator is a separate class.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832874953" expanded>

Missing UI print method
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832882162" expanded>

Should we be using printParagraph here>
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832882336" expanded>

Similar here.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832883071" expanded>

Need to change print statement here.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832883844" expanded>

the print statements in this method arent using the UI method either
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#discussion_r832884347" expanded>

Here as well!
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/96#discussion_r835717343" expanded>

Will this work if parameterArray is null?
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/96#discussion_r835717425" expanded>

what happens when parameter is null?? eg view appointments
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/99#discussion_r835846268" expanded>

So the find methods return an array, what do you do with this array?
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/99#discussion_r835846421" expanded>

All these are irrelevant to Medicine?
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/106#discussion_r835846703" expanded>

NIce Logo!
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/106#discussion_r835862271" expanded>

Missing closure brackets here.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/124#discussion_r838477708" expanded>

Sorry whats this ArrayList Class?
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/45#discussion_r827086699" expanded>

I think you missed it, its present on line 81.

</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/72#discussion_r831815541" expanded>

this is supposed to be implemented by the table function in the future, so that everything is visible.
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/72#discussion_r832828610" expanded>

Yes it means Continue 
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/135#discussion_r838576195" expanded>

Made adjustments in my latest commit.
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/30#issuecomment-1063873225" expanded>

Maybe split this issue up into 3, since if you were to tag this issue in your PR it will close the issue. 
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/33#issuecomment-1066086242" expanded>

Everything looks fine! Good job @wraineflores!
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/35#issuecomment-1067957838" expanded>

This issue was addressed in PR #37 hence closed.
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/45#issuecomment-1068647878" expanded>

Thanks for the reviews guys, I'll be merging the PR then, since there aren't any issues!
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/5#issuecomment-1068762296" expanded>

This issue was resolved by #29.
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/6#issuecomment-1068762778" expanded>

This issue was resolved by #29 
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/62#issuecomment-1074778256" expanded>

A user is able to edit information about existing medicines. Need to create functionality and relevant methods allowing user to perform this task.
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/74#issuecomment-1074930429" expanded>

Seems fine! 
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#issuecomment-1075901681" expanded>

Do update your print statements to use the print methods given in the UI Class.
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/80#issuecomment-1076002811" expanded>

Looks fine!
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/82#issuecomment-1076023037" expanded>

Seems Good
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/84#issuecomment-1077331805" expanded>

Changes made to code, making these JUnit tests redundant. Hence closing PR.
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/92#issuecomment-1078628377" expanded>

i dont think this is the correct way of using status, cuz ideally when we printing tables when showcasing like a list of items we also want to use status.
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/95#issuecomment-1078912533" expanded>

Done with the JUnits for now. Someone please take a look and approve. Noticed an error with Deleting Medicine so changed that as well.
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/105#issuecomment-1079833734" expanded>

Hi @Anvitha-r looks good, could you resolve the merge conflict and push again!
</panel>

<panel  header="**41 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/63#issuecomment-1079895537" expanded>

This issue has been resolved by PR by @Anvitha-r 
</panel>

<panel  header="**42 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/57#issuecomment-1079895635" expanded>

This Issue has been resolved in earlier PRs by @kktai1512 
</panel>

<panel  header="**43 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/109#issuecomment-1081428358" expanded>

Already resolved in #120 
</panel>

<panel  header="**44 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/122#issuecomment-1081428745" expanded>

Well Done finished V2.0
</panel>

<panel  header="**45 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/126#issuecomment-1083159321" expanded>

Resolved in PR #125 
</panel>

<panel  header="**46 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/179#issuecomment-1091026223" expanded>

Did you edit anything on the sh files?
can tou try run .sh file on your computer see if it passes
</panel>

<panel  header="**47 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/186#issuecomment-1093984360" expanded>

Seems good!
</panel>

<panel  header="**48 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/185#issuecomment-1093985430" expanded>

Seems fine!
</panel>

<panel  header="**49 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/192#issuecomment-1094180952" expanded>

Good Job seems fine!
</panel>

<panel  header="**50 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/155#issuecomment-1094193805" expanded>

I believe this NRIC checker would be necessary in the clinic context. Its definitey somethiing we could offer if the product is being used by Clinics. But for the purpose of this project and the need for students and tutors alike to test features with ease we will not be implementing the checker for our V2.1.
</panel>

<panel  header="**51 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/170#issuecomment-1094555726" expanded>

Changes contribute be everyone in respective PRs
</panel>

</panel>


<panel type="info" header="### 25. BRAD.. REN `@BradenTeo` (21 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823300232" expanded>

I think the change needs to be reverted. For code quality.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823300555" expanded>

Can revert here too.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823300960" expanded>

Here too.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823302674" expanded>

I think for the rest of this class can revert all the similar changes.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823309911" expanded>

Do add 8 spacings here. Can do the same for the rest of the file too.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823322236" expanded>

Can maybe use a different colour here:
Maybe like:
'''java
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ALEXIS_ICON =
            ANSI_PURPLE
            + "  ____  _\n"
            + " / ___|| |__   ___ _ __ _ __   __ _ ___ ___\n"
            + " \\___ \\| '_ \\ / _ \\ '__| '_ \\ / _' / __/ __|\n"
            + "  ___) | | | |  __/ |  | |_) | (_| \\__ \\__ \\\n"
            + " |____/|_| |_|\\___|_|  | .__/ \\__,_|___/___/\n"
            + "                       |_|" 
            + ANSI_RESET;
'''
This website is useful: [ASC11 art](https://patorjk.com/software/taag/#p=testall&f=Graffiti&t=Sherpass)
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823328552" expanded>

Should we ask prof about this? From what I remember, the correct way was to leave 8 spaces.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r823328717" expanded>

Was referring to the 8 spaces
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/30#discussion_r824382553" expanded>

I'll approve the PR first and we can edit the code quality afterward.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826811116" expanded>

I think can remove the comma after the last argument
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826830587" expanded>

Oops looks like I missed this in my PR. Can you help to rename the variable to `parsedDoOnDateToEdit`? Thanks.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826833135" expanded>

I think can move line 240 to be in-line with 239 (if it doesn't exceed 120 characters)
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826840936" expanded>

Can add a newline after the brace (for checkstyle concerns)
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/38#discussion_r826852382" expanded>

What is the exception being caught here? 
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/38#discussion_r826854760" expanded>

Do put in the specific exception here too.
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826892909" expanded>

yup
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826894023" expanded>

Got it. I'll change the magic literals to constants in my next PR.
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/41#discussion_r827951082" expanded>

Possible to put lines 111 and 112 on the same line?
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/41#discussion_r827951863" expanded>

Can be on the same line too?
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/156#discussion_r846729467" expanded>

You might want to rename it to "refactor"
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/161#discussion_r847005978" expanded>

For the 'Optional' section, I think it should be "No if you are intending to use this parameter" since "clear" is not a valid user input now.
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825637606" expanded>

I've deleted this file already. Did you look at the [files changed](https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37/files) to review?
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825638395" expanded>

This class should not be showing up. I deleted it midway through my coding.
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825643262" expanded>

Ok, will change it, thanks.
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825645618" expanded>

Thanks for pointing this out.
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825654838" expanded>

I'm not sure what you mean by this section having the same issue as line 125, since there are no `else` blocks here. 

For your 2nd point, do you mind giving an example on how to implement it?
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825657310" expanded>

Got it, will change it to `WrongEditInfoFormatException`.
@jltha I have a different exception message for this exception so I won't merge it with `InvalidInputException`
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825661906" expanded>

Sure, I'll extract a method for this. Thanks for pointing it out.
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825678531" expanded>

I'm not really sure how to implement this other than using different classes for each type of task (which would cause many complications when trying to implement the `edit` function). 

Not really sure if it's possible to override ~~overload~~ attributes in the same class.
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825688728" expanded>

I see... I'll delete this method, thanks.
`NumberFormatException` is present in the method above this one.
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825694072" expanded>

I see. I'll implement this and you can check it later.
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825857990" expanded>

Hmm I see what you mean... Well, I guess it's just a style preference. I think the only issue with that is that this Task class will be have more code and might be troublesome to read, since essentially I'll still have to initialise the 3 constructors with 6 LOCs like this:

```java
public Task(String description) {
        this.description = description;
        this.isDone = false;
        this.byDate = "";
        this.remindDate = "";
}
```
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825983862" expanded>

Hmm I tried implementing your code but it doesn't work. It's supposed to return a readable date to the user and not just throw exceptions. Did you interpret it differently?
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r826199024" expanded>

Didn't notice this. Will also have to update the rest of the classes next time.
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/152#discussion_r846599261" expanded>

Sure, will do.
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#issuecomment-1066518112" expanded>

Oops I'll take note of my commit messages from now on
</panel>

</panel>


<panel type="info" header="### 26. MATH..DRAN `@mathanmahe` (19 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r833789749" expanded>

Cool, I learned today we can also generate UML diagrams using text!
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r833789908" expanded>

Nice use of abstraction into the parser class!
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r833811575" expanded>

Perhaps can consider extracting each case into methods for better SLAP.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r833812218" expanded>

I see you have already implemented this in the latest commit! LGTM!
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/71#discussion_r834176504" expanded>

Good use of UML sequence and class diagrams to explain the working of the system in a simple way.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/71#discussion_r834182481" expanded>

Developer guide for main menu features can be summarised and broken down into different sections wherever possible.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/77#discussion_r836363671" expanded>

Would it be better to simply return modulesList.size() for the getModuleCount() function?
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/77#discussion_r836372109" expanded>

I like the way you have reused the existing functions defined under the respective managers to add items. Good application of abstraction!
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837338795" expanded>

Would it be possible to extract a method for each case to remove a layer of nesting?
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837339829" expanded>

Good application of abstraction and object oriented way of programming!
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/75#discussion_r837341221" expanded>

Good continuous update of test cases with new features to facilitate better regression testing.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/78#discussion_r837347378" expanded>

Good update of your test cases at every feature to better deal with regression testing.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/88#discussion_r839410876" expanded>

Could we rename the boolean to shouldPrintMessages so it is more intuitive?
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/137#discussion_r845061791" expanded>

Nice use of stubs to work around the JUnit testing error!
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845067264" expanded>

Good implementation to improve user ease of access when entering commands!
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/138#discussion_r845069150" expanded>

Good use of hash for checking existing names!
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/135#discussion_r845079796" expanded>

Good implementation of changing into a different section easily!
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/145#discussion_r846764979" expanded>

Thanks for adding in the glossary!
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/148#discussion_r846765191" expanded>

Good improvement on making the goto command simpler!
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r838599822" expanded>

@OzairHasan I have introduced a new parameter for category. I have reflected this in storage file as well!
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839405944" expanded>

The indentation is rendered as a code chunk on markdown format!
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839406265" expanded>

Sure
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839406543" expanded>

Sounds good!
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839407722" expanded>

I have already extracted out for the individual cases, but I will see if i can shorten it further!
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/82#discussion_r839408054" expanded>

Sounds good! I will look into it!
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/150#discussion_r846763390" expanded>

Sure thing! Thanks for the input!
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/150#discussion_r846763879" expanded>

Since it was a private method I did not add as a javadoc format. Wrote a normal comment to the reader instead!
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/150#discussion_r846764039" expanded>

It was easier to refactor an existing print method I had that had the same function, as it was already being used.
Also wanted the distinction to be clear between printing a normal message without divider and printing with divider!
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/23#issuecomment-1066284877" expanded>

LGTM!
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/31#issuecomment-1070317005" expanded>

LGTM!
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/40#issuecomment-1070317206" expanded>

LGTM!
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/31#issuecomment-1070697877" expanded>

I've linked an issue that I think this PR would fix - Issue #41 
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/40#issuecomment-1070701984" expanded>

I've added an issue that I think this PR would solve - Issue #39 
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/42#issuecomment-1070791993" expanded>

This fixes the extra warning log that was shown during testing.
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#issuecomment-1076240745" expanded>

@wli-linda, @YitHien Thank you for the code review. Will update these suggestions accordingly.
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#issuecomment-1076907468" expanded>

LGTM!
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/90#issuecomment-1085313471" expanded>

Hi I am using global variables so I can break down easily into various methods. If I change the scope I would not be able to extract methods due to many variables they are dealing with. In this case is a higher scope accepted?
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/109#issuecomment-1086519973" expanded>

Just tested it out, there is a warning due to a bug in parsing.
I will be fixing this in V2.1!
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/97#issuecomment-1086521015" expanded>

Current version allows any string parameter to be entered for time and day for modules. 
There will be more constraints introduced to restrict this.
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/107#issuecomment-1086522618" expanded>

Related to #97, will be fixed in v2.1.
</panel>

<panel  header="**41 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/113#issuecomment-1086522829" expanded>

Related to #97, will be fixed in v2.1.
</panel>

<panel  header="**42 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/111#issuecomment-1086523374" expanded>

Related to #97, will be fixed in v2.1.
</panel>

<panel  header="**43 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/106#issuecomment-1086523827" expanded>

Related to #97, will be fixed in v2.1.
</panel>

<panel  header="**44 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/102#issuecomment-1086524086" expanded>

Related to #97, will be fixed in v2.1.
</panel>

<panel  header="**45 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/104#issuecomment-1086524215" expanded>

Related to #97, will be fixed in v2.1.
</panel>

<panel  header="**46 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/103#issuecomment-1086524414" expanded>

Related to #97, will be fixed in v2.1.
</panel>

<panel  header="**47 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/115#issuecomment-1086532572" expanded>

linked to #128 
</panel>

<panel  header="**48 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/114#issuecomment-1086532613" expanded>

linked to #128 
</panel>

</panel>


<panel type="info" header="### 27. TAN ..HIEN `@YitHien` (18 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r832901519" expanded>

Nice refactoring of string constants!
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/56#discussion_r832902938" expanded>

Interesting thought to create separate objects for each delimiter. Good OOP!
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#discussion_r833001431" expanded>

You could consider refactoring out the string constants here! And likewise for the subsequent strings too
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#discussion_r833003741" expanded>

Minor coding standard violation here; consider adding some spaces surrounding the = sign
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/64#discussion_r833005582" expanded>

If I'm not wrong, the user would be able to enter in a blank keyword to look for and the method may return every item in the list. Perhaps consider edge cases of inappropriate keywords for subsequent commits!
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/77#discussion_r837340475" expanded>

Consider refactoring string constants in subsequent commits!
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/77#discussion_r837341342" expanded>

Good exception handling!
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/78#discussion_r837343536" expanded>

Nice refactoring of string constants!
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837345505" expanded>

Nice tabling format for User Guide! I'll add this to my section as well
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/76#discussion_r837345938" expanded>

Great work on implementing the calendar reader!
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/129#discussion_r842582962" expanded>

Do consider removing unused code comments!
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/131#discussion_r842633868" expanded>

Good splitting of chained method calls! Provides easier readability too!
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/138#discussion_r845049184" expanded>

Good checks on the uniqueness of contacts!
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/138#discussion_r845051620" expanded>

Interesting way to check for uniqueness, looks good!
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/137#discussion_r845060555" expanded>

Good use of stubs to test load and store methods!
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/150#discussion_r846756001" expanded>

Perhaps this should be in Javadoc format instead?
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/150#discussion_r846756077" expanded>

Consider removing unused lines of code!
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/150#discussion_r846756236" expanded>

Any reason not to use textui.showToUser directly?
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832891168" expanded>

Thank you for the comment. I don't think it will break down as this integer constant is purely to access the 2nd element after splitting the user's input into 2.
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832893094" expanded>

Thanks for the catch! Will edit it accordingly.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832900785" expanded>

Thanks! Refactored some methods out so functional code should be less than 30 lines now.
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/65#discussion_r832973879" expanded>

Okay sounds good! Edited accordingly.
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/69#discussion_r834344748" expanded>

Noted! Will make the changes in subsequent commits!
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842577803" expanded>

I trimmed trailing spaces away while also checking that '/' characters are surrounded by whitespaces. If the '/' is in the last character, it will always fail since the spaces after it are trimmed, so this constraint is just to prevent any slashes at the end. I don't think it makes sense from a user perspective to have the last character as a slash, but I'm happy to hear alternate suggestions!
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842579628" expanded>

Good catch, thanks!
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/130#discussion_r842581277" expanded>

I believe it is possible, but each field has their own set of restrictions to be checked so I'm not too sure how to go about implementing this.
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/pull/31#issuecomment-1070347614" expanded>

Fixes #11, #30 and #41 
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-4/tp/issues/92#issuecomment-1086677208" expanded>

Line 62: Gradle checkstyle does not seem to allow the '+' sign to be on the same line

![image](https://user-images.githubusercontent.com/69446722/161393193-9b22483a-557b-4608-9272-f16f7232d435.png)

</panel>

</panel>


<panel type="info" header="### 28. HUAN..FENG `@a1021492980` (16 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820102362" expanded>

Nice logo!
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/17#discussion_r820104333" expanded>

Should we consider the cases where the userRepsInput is not a number (i.e String) by throwing NumberFormatException? 
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/22#discussion_r822512048" expanded>

Perhaps listed explicitly the constant to be imported?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831338031" expanded>

Good implementation of Day class to track schedule!
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831344059" expanded>

Perhaps ignore the resource folder?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831350578" expanded>

Perhaps can write the error messages to be printed as constants?
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/113#discussion_r832550927" expanded>

Good abstraction!
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/112#discussion_r832554643" expanded>

will do that, thanks for the message
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/118#discussion_r833036351" expanded>

Effective and accurate detection of bug!
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/121#discussion_r833262202" expanded>

Good and clear navigation!
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/126#discussion_r833496652" expanded>

Nice detailed explanation!
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/136#discussion_r834531465" expanded>

Very standardized format, good!
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841015726" expanded>

Is this link not working?
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/256#discussion_r843463610" expanded>

Is there supposed to have 2 `.toLowerCase()`?
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/272#discussion_r845017580" expanded>

Perhaps change to lower cases?
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/309#discussion_r846636774" expanded>

seems like we have a clash in refactoring code here, I will discard my changes here
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/21#discussion_r822274429" expanded>

Thank you!
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/21#discussion_r822332393" expanded>

No problems!
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/21#discussion_r822333593" expanded>

Issue addressed
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/48#discussion_r825435408" expanded>

yea, in the real implementation I will update it accordingly, the 13 is just for now, I didn't think of using size(), thanks for the suggestion. I was thinking since the getNumberOfExercises() returns numberOfExercises, it is a bit pointless to do assert getNumberOfExercises() == numberOfExercises; that's why I used 13, I will update it to use .size()! Thank you!
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830447306" expanded>

Ohhh, thanks for pointing out, I forgot to remove
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830447323" expanded>

Yes, I will update that
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830447345" expanded>

Comment removed
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830476677" expanded>

Good point, thank you for your advise!
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830476716" expanded>

sure, I didn't notice that
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830481639" expanded>

Thank you for your advise
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/98#discussion_r830481667" expanded>

Sure, will do that
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/100#discussion_r830555452" expanded>

yes, thank you for the reminder!
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/100#discussion_r830555504" expanded>

I forget to remove, thank you!
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/100#discussion_r830555564" expanded>

Yes, I didn't see that, thank you!
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/101#discussion_r830626672" expanded>

hahahaha, thanks!
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/110#discussion_r832775738" expanded>

I was thinking whether we need that heading. If this is a extra part, I will just remove that, thank you!
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833433618" expanded>

Thank you 😊😊
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833435327" expanded>

Thanks for finding it for me! even gradle didn't notice haha.
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833842323" expanded>

This is easy to implement
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#discussion_r833842790" expanded>

However, for this issue, I am afraid that it may be hard to move this method to UI since moving it to UI may need to pass several parameters to the UI class
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/129#discussion_r834148537" expanded>

Thank you!
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/130#discussion_r834158486" expanded>

Just added that, thank you for finding it!
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/129#discussion_r834159030" expanded>

I have added this into the help message, thank you!
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/155#discussion_r836647997" expanded>

thanks for spotting that!!
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/216#discussion_r840824657" expanded>

ehhhh, this belongs to @alanlowzies 
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841003222" expanded>

Yes, it is possible, but Im also trying to delete the file before creating it, perhaps you mean I remove `workoutFile.createNewFile();` and replace with `createWorkoutFile()` ?
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841003293" expanded>

Thank you for spotting this.
</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841003447" expanded>

Will do that, thank you
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841003479" expanded>

Thank you!
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841003520" expanded>

Thank you!
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841004014" expanded>

Since it is a similar method to `loadScheduleFile()` , `loadPlanFile()` and `loadWorkoutFile()`, and they are all in WerkIt.java, I then put this method in WeriIt.java. The other reason is that we need to make use of the `getDayList()` to get the DayList, I assume that is the reason why you also put `loadScheduleFile()` , `loadPlanFile()` and `loadWorkoutFile()` in WerkIt instead of `FileManager`.
</panel>

<panel  header="**48 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/218#discussion_r841005478" expanded>

Alright, will do that, thank you for you suggestions!
</panel>

<panel  header="**49 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/232#discussion_r841262588" expanded>

That's a good idea, will do that, thanks!
</panel>

<panel  header="**50 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/232#discussion_r841266763" expanded>

Thank you for your suggestion, will reflect the change soon
</panel>

<panel  header="**51 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/232#discussion_r841266782" expanded>

Thank you for your suggestion, will reflect the change soon
</panel>

<panel  header="**52 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841268275" expanded>

Oh, my mistake, will fix it soon.
</panel>

<panel  header="**53 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841269320" expanded>

The `execute` will call printExerciseList() from ExerciseList, I've updated the changes.
</panel>

<panel  header="**54 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841269897" expanded>

<img width="677" alt="image" src="https://user-images.githubusercontent.com/60375639/161445835-eed28a51-a176-432b-bdea-92bbf5d1a9dc.png">

I got inspiration from here.
</panel>

<panel  header="**55 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/233#discussion_r841389539" expanded>

Thank you!
</panel>

<panel  header="**56 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841756450" expanded>

Thank you!
</panel>

<panel  header="**57 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841757001" expanded>

Thank you for you suggestion, will update it in next commit
</panel>

<panel  header="**58 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841757106" expanded>

Thank you for you suggestion, will update it in next commit
</panel>

<panel  header="**59 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841757233" expanded>

Thank you!
</panel>

<panel  header="**60 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/253#discussion_r843454883" expanded>

Because the original updatePlanContainsUpdatedWorkout() is shared with delete feature, and delete feature will not have a updatedWorkout
</panel>

<panel  header="**61 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/253#discussion_r843455037" expanded>

Thanks for spotting that!
</panel>

<panel  header="**62 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/253#discussion_r843455144" expanded>

Thank you for your suggestion.
</panel>

<panel  header="**63 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/253#discussion_r843459286" expanded>

My bad, now I look again and I feel you are right, will make changes regarding it, thanks!
</panel>

<panel  header="**64 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/33#issuecomment-1064101786" expanded>

fixed #33 #24 
</panel>

<panel  header="**65 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/85#issuecomment-1069266925" expanded>

As a user, I can search for schedules that contain certain keywords.
</panel>

<panel  header="**66 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1073266027" expanded>

PR #101  has documentation for the list exercise function and help feature
</panel>

<panel  header="**67 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1077483812" expanded>

PR #129  has documentation for search exercise/workout/plan/all features
</panel>

<panel  header="**68 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/215#issuecomment-1086208074" expanded>

> 

Ohh, I was working on 2 branches, I think I accidentally branch the new branch from this branch, sorry!
</panel>

<panel  header="**69 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/194#issuecomment-1086928372" expanded>

#233 has Exercise-related features
</panel>

<panel  header="**70 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/286#issuecomment-1093839665" expanded>

#305 contains the write up for:
1. All search relevant features.
2. Viewing exercises.
</panel>

<panel  header="**71 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/209#issuecomment-1093839764" expanded>

It is condensed in #305 
</panel>

<panel  header="**72 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/276#issuecomment-1094042850" expanded>

Extract Methods in `Parser#createSearchCommand()` #308 
</panel>

<panel  header="**73 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/312#issuecomment-1094063381" expanded>

#308 
</panel>

<panel  header="**74 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/203#issuecomment-1094073730" expanded>

fixed in #305
</panel>

</panel>


<panel type="info" header="### 29. LIM .. RUI `@limjierui` (14 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/34#discussion_r824429556" expanded>

Can explicitly import the specific classes/methods instead of importing all
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/34#discussion_r824430213" expanded>

Lacking a newline at the end of file
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833004885" expanded>

Great implementation! Perhaps it would be better if we name this class more specifically e.g CalculateInputCommand as in the future if we have different things we would need to calculate it would be well differentiated.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833006899" expanded>

Enumerations fields should be in capital letters as seen in https://nus-cs2113-ay2122s2.github.io/website/schedule/week4/topics.html#w4-4-oop-java-enumerations
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/77#discussion_r837012170" expanded>

If i remember correctly, i think the comment should be above instead of beside the code.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/90#discussion_r839168031" expanded>

Remember to remove any commented out code!
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/182#discussion_r846609334" expanded>

Perhaps can remove most of the test cases in the .txt file before uploading so that there is a clean slate of .txt file when the others pull from the updated code.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/182#discussion_r846609391" expanded>

Not too sure what this block is, but if its a white space perhaps can remove.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/213#discussion_r847021790" expanded>

I think our jar file is called MindMyMoney.jar, can just put it in.
```suggestion
   2. Open a terminal window whose current directory is that folder, and run `java -jar MindMyMoney.jar`,
```
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/213#discussion_r847021976" expanded>

```suggestion
           where `MindMyMoney.jar` is the name of the jar file.
```
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/213#discussion_r847025045" expanded>

Perhaps can specify an example of credit card limit.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/213#discussion_r847026609" expanded>

Perhaps can add the optional {DATE} field. if the user would like to search by date.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/213#discussion_r847026828" expanded>

```suggestion
   4. Test case: `list /e {DATE}`
```
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/213#discussion_r847027787" expanded>

```suggestion
      paid for. If {DATE} is specified, a list of expenditures with the {DATE} is displayed.
```
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827893153" expanded>

Fixed
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827893343" expanded>

Fixed
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827893443" expanded>

Fixed
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827893586" expanded>

Fixed
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833871596" expanded>

fixed
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833871645" expanded>

fixed
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833871693" expanded>

fixed
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833871798" expanded>

fixed
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833871843" expanded>

fixed
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833871904" expanded>

fixed
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/72#discussion_r833871935" expanded>

fixed
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837029988" expanded>

Sorry my bad, i editted the code previously and forgot to change it back correctly. Will make the necessary changes
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837030752" expanded>

Removed, it was an unused libarary
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837030781" expanded>

Removed, it was an unused libarary
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837032751" expanded>

Resolved
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/78#discussion_r837032793" expanded>

resolved
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838555741" expanded>

resolved. Thanks for the picture hahaha
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838555857" expanded>

resolved
</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838555961" expanded>

resolved
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838556095" expanded>

resolved
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838556289" expanded>

resolved
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838556391" expanded>

resolved
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838557764" expanded>

resolved

</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838557842" expanded>

resolved
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/86#discussion_r838561122" expanded>

resolved
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/143#discussion_r841096665" expanded>

resolved.
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/154#discussion_r841343347" expanded>

Hmm, I did that previously but I realised there will be alot of if statements, hence I decided to just throw the exception in the function itself.
</panel>

<panel  header="**42 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/175#discussion_r846607568" expanded>

Resolved.
</panel>

<panel  header="**43 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846778805" expanded>

removed during gradle checks.

</panel>

<panel  header="**44 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846781427" expanded>

ok
</panel>

<panel  header="**45 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846781439" expanded>

resolved
</panel>

<panel  header="**46 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846781469" expanded>

resolved.
</panel>

<panel  header="**47 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/200#discussion_r846781495" expanded>

resolved.
</panel>

<panel  header="**48 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/87#issuecomment-1083982223" expanded>

Nicely done! Looks good to go!
</panel>

<panel  header="**49 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/92#issuecomment-1094672490" expanded>

All issues have been cleared in multiple PRs by different people. Thanks TA for pointing these issues out.
</panel>

</panel>


<panel type="info" header="### 30. YANG..IKUN `@Yzkkk` (13 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/110#discussion_r832857865" expanded>

should we include -result:String also since it is being returned in execute()
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844568402" expanded>

Do you think we should quote the user's invalid input just to be consistent?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844569015" expanded>

same question as above.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844569791" expanded>

An example would be this, user's wrong input will be quoted
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/176#discussion_r844578506" expanded>

The range was changed to 0 to 20 btw
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845249509" expanded>

I think the bullet list should be aligned
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845249700" expanded>

same as above
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/180#discussion_r845252633" expanded>

`m.getModularCredit() &gt; MINIMUM_MODULAR_CREDITS` would be a better option
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845381356" expanded>

Maybe `marked as uncompleted` instead of `unmarked`.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845382061" expanded>

Full stop missing.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845383773" expanded>

there shouldnt be a `"`. It should just be `help add`.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/182#discussion_r845388065" expanded>

I think you can omit the `If there exists a module CS2113T, and it has at least one task` since it is already mentioned in the assumption.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/197#discussion_r846716472" expanded>

I suggest putting as something like`ERROR_GRADE_REMOVAL_FAILED =  "Sorry, your grade has not been entered yet for this module. \nPlease first add some grades!";` to make the error msg more consistent
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/84#discussion_r825564051" expanded>

What about we put the messages in TextUi and other strings like "String", "mark" go into StringConstants? 
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/84#discussion_r826005621" expanded>

ok, ive made the changes
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/107#discussion_r832973946" expanded>

yup correct, made changes regarding this
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841161997" expanded>

Hmm weird, it seems to work well on my side.

![Screenshot (864)](https://user-images.githubusercontent.com/69583592/161412803-7901dc43-1f11-47ab-be47-9e067ab1c9a2.png)

</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841162224" expanded>

But yes, i do notice if I enter `add task "task" -a "description"`, it is going to eat the last letter.

Not very sure what to add to the regex to fix this.

![Screenshot (865)](https://user-images.githubusercontent.com/69583592/161412896-d0dad641-cd5c-4b42-bc96-c4a350104926.png)

</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841162534" expanded>

Nop, in this case, the invalid will be capturing excess arguments at the back of each command.

For eg,

![Screenshot (867)](https://user-images.githubusercontent.com/69583592/161413045-4871bb0e-f8f6-4b07-9e7e-352c5defb8be.png)

</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841163578" expanded>

Yup you are right, extracted.
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841166134" expanded>

That worked but the output will be `'-a CS2101'`.

Anyways, Ive changed it to `(\s+((-m|(?&gt;invalidFlag>.*))\s+(?&gt;taskModule>\w+)))?` and now it identify invalid flag to be `'-a'`. Thanks!
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r841166298" expanded>

![Screenshot (869)](https://user-images.githubusercontent.com/69583592/161414356-895b96f4-53af-4ac1-bc9f-48e6c7d3b0f5.png)

</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r842833572" expanded>

>if all 3 optional parameters are not captured, then it means the flag is incorrect

True, yea I've made some changes and grouped the 3 flags together. Currently, the code doesn't have the previous bugs as commented above, it's also able to give error messages after capturing empty spaces after the flags, for eg `-d " "` . But once I have `|(?&gt;invalidFlag>.*)` after `(-n|-d|-t)` , and I enter a random flag, the random flag will be captured by `invalid` instead of `invalidFlag`. So as for now I didn't include the `&gt;invalidFlag>` yet, and the error message for invalid flag is still the very general `"Invalid compulsory parameters."`. 
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#discussion_r843484142" expanded>

yea extracted
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/183#discussion_r846714051" expanded>

The logic is different now. Last time it was "when invalid task number or no task number was provided by the user, we assume that it is not `'del task'` but rather it's a `'del mod [MODULE_CODE]'` input and thus execute the `deleteModule(moduleList)`. Now, it is "execute deleteModule when moduleCode is detected", which I think makes more sense. Also, now the invalid task number/no task number errors have been captured as exceptions when parsing, so it shouldnt appear in DeleteCommand. 
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/183#discussion_r846714365" expanded>

This is to be consistent. We cant have a `StringConstants.TASK_ESTIMATED_WORKING_TIME` for eg within our methods, right?
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/73#issuecomment-1061422802" expanded>

Included MarkCommand, MarkParser, ListCommand class
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1086626136" expanded>

commented out some of the Junit tests since exceptions and error messages need to be changed.
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1086628159" expanded>

"Invalid compulsory parameters. Please check and try again." is replaced by some of the error messages below.

Going to add more exceptions for different commands later on.

![Screenshot (856)](https://user-images.githubusercontent.com/69583592/161382556-d101d40b-4104-4cea-83b2-73b44ac0230c.png)
![Screenshot (857)](https://user-images.githubusercontent.com/69583592/161382557-9b858aeb-5203-439a-8ad7-8b0570e140b4.png)
![Screenshot (858)](https://user-images.githubusercontent.com/69583592/161382563-1143fd09-a2d2-422e-8477-2abcede9493f.png)


</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1086776275" expanded>

![Screenshot (860)](https://user-images.githubusercontent.com/69583592/161412047-a091ace4-1e28-4c7b-8ab3-0581ce0d9190.png)

</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1086777526" expanded>

The expected output for empty string is shown below. 

We can include in UG saying that our program doesn't recognise empty strings after optional param flags, so if users inputted that way our program is going to treat it as excess param.

![Screenshot (862)](https://user-images.githubusercontent.com/69583592/161412283-5625da03-53c3-4695-84f3-07bbce5d041e.png)

</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1086816809" expanded>

Here are some examples of error messages.
![Screenshot (879)](https://user-images.githubusercontent.com/69583592/161420026-e2805500-dfc1-4d80-bec0-847ef3c20695.png)

</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1086817595" expanded>

The EditCommand seems to have some bugs for the regex. Not sure which part though, I've done it the same way as AddCommand and Addcommand is alright.

![Screenshot (877)](https://user-images.githubusercontent.com/69583592/161420087-a625f1d5-1a49-4798-b17e-6cca1b488ec4.png)

</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-3/tp/pull/123#issuecomment-1088359616" expanded>

> Could be cause the invalidTaskNameFlag captures the `-d` instead, as the regex first checks for -n, and since it is not present, it proceeds to match the input in the invalidTaskNameFlag group. Maybe to fix u could have one invalid flag group that captures everything except for `-d`, `-n` and `-t` before capturing the correct group

Yea, but that way the error message will not be very descriptive...

I've also documented the regex of editParser but still couldn't figure out what is wrong 
</panel>

</panel>


<panel type="info" header="### 31. WANG..ILIN `@hlwang56` (12 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/27#discussion_r822689495" expanded>

May use other exception. This could be fixed later.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/27#discussion_r822691031" expanded>

You may refer to the coding standard to fix boolean part. 
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/40#discussion_r824358624" expanded>

if you would like to check the index, you may use a seperate boolean function to check it as it is the requirement of coding standard.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/53#discussion_r825882288" expanded>

not sure if it is allowed but i suppose we can check it later
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/82#discussion_r827822396" expanded>

It's probably better to use enum for the infoString?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/82#discussion_r827824442" expanded>

Same for here. It' probably clearer to use enum instead.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/135#discussion_r835740378" expanded>

Consider using exception instead. You may request a new one if there isn't any that you need 
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/135#discussion_r835740531" expanded>

Consider setting info string as a static final constant
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/135#discussion_r835740690" expanded>

this could be declared as well.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/135#discussion_r835740744" expanded>

&hat;&hat;same as previous
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/135#discussion_r835740756" expanded>

&hat;&hat;
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/82#discussion_r846803763" expanded>

Sorry my bad I was trying to refer to magic number (protect static final String)
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/79#issuecomment-1068239194" expanded>

The part that Si Zheng mention has been fixed.
</panel>

</panel>


<panel type="info" header="### 32. ZHOU..U QI `@cczhouqi` (11 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/91#discussion_r842974303" expanded>

Remember to put "else" after the close curly bracket of your "if" statement to follow the consistent style :D
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/91#discussion_r842977664" expanded>

<img width="967" alt="Screen Shot 2022-04-05 at 11 53 02 PM" src="https://user-images.githubusercontent.com/69306031/161795707-0c1e2c75-2113-4c5b-a53a-7dabdc907c57.png">
You will need to resolve the conflicts before merging.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/99#discussion_r844651612" expanded>

I think we need to avoid using * in import statements.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/99#discussion_r844653837" expanded>

Remember to have a space before your "=" :D
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/99#discussion_r844655933" expanded>

I think it should be Nurse Page here!
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/99#discussion_r844656247" expanded>

Remember to have a space before and after "+".
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/105#discussion_r845307631" expanded>

Remember to add a space before "throws".
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/105#discussion_r845309796" expanded>

Space is missing here before "=" :D
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/111#discussion_r845692001" expanded>

I think it should be Nurse List instead of Doctor list here.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/116#discussion_r845928938" expanded>

It's good that you changed wardNumber to integer instead of string! It will help to prevent the user from entering meaningless input.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/121#discussion_r846582143" expanded>

I think ward number don't need to have "non-existence" exception (since we're adding a new ward into the system), it should have exception for duplicate ID instead.
</panel>

</panel>


<panel type="info" header="### 33. LIM .. HAN `@Lim-Shi-Han` (11 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824233259" expanded>

Instead of making price public I think it is better to use a getter for price instead
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824233828" expanded>

Don't need to number choices because the parent class already number when printing out the choices
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824232543" expanded>

I think user input should be handled in the controller class
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831699776" expanded>

just a recommendation: you can create a findOrder() method or smth along those lines that let's u find if an order is in the orders array 
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831701277" expanded>

One small suggestion: Instead of having printOrder() methods in both Order and OrderController classes, I think it might be better to pass the string representation back to the printOrder() method in OrderController... U can discuss with ziyan and see if it is better
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831702462" expanded>

Like mentioned above gotta check if index is valid for the orders array, so I think creating a method to check if index out of bounds would be useful for all the other methods as well
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/61#discussion_r831922135" expanded>

I think the FILE string needs to have the extension as well (e.g. dish.txt)
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/61#discussion_r832302975" expanded>

I think it's .bin

But for bin file is it we can just pass in the object to store like that and it will work? I nvr rly work with bin file that often so I'm not sure haha
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/61#discussion_r833175895" expanded>

Yeah we can decide that later bah I'll just approve ur PR first everything else looks good
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/150#discussion_r841375255" expanded>

I think "is..." is only for naming boolean attributes, correct me if I am wrong though!
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/169#discussion_r846915777" expanded>

I think "`Dish` consists of `name` and `price` and corresponding modification methods." might be better
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/24#discussion_r824366624" expanded>

Yup thanks for the reminder haha
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826657994" expanded>

Yeah if we enable assertion it will crash... that's why I'm not exactly sure what's the point of having assertions in our program lol
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826666893" expanded>

Oh ok I see I will make the changes
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826740215" expanded>

Yup sure
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#discussion_r826744113" expanded>

I think there's not suitable level to assign it to if we used a new `logError` (e.g. Warning might be too strong)
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/76#discussion_r833418679" expanded>

Okay
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/76#discussion_r833460173" expanded>

Ok ah that's true I might edit it in the next pr
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834555221" expanded>

Oh ok I just deleted... Yeah I fetched upstream not strong y it's there lel
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834574190" expanded>

Okay I go change
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834582666" expanded>

Will handle it in another PR, as we will have to change the JUnit tests also
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/88#discussion_r834949997" expanded>

> > so technically, you can just check for name.isEmpty() in the constructor and throw IllegalArgumentException there, dunnid a extra method to check valid name.
> 
> still need the boolean there cuz I used `isValidName` for some assertion, maybe only change to `name.isEmpty()`?

I think we can still use name.isEmpty() for assertions, but then the JUnit tests I encountered some problems with our tests so might have to change that part

But assertions shld be fine by using `assert !(name.isEmpty())`

</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/13#issuecomment-1063174666" expanded>

Yes it works, lgtm
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/16#issuecomment-1063679526" expanded>

On the whole looks good but I think maybe can edit some of these parts:

1. Create a new package for the Dish and other entity classes (e.g. "models" or "entities")
2. Can update the Controller class so that we can actually try testing and all (unless we intend to do it at a later time)
3. Update the tests because we need do JUnit testing thing

But yeah looks good :)
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/25#issuecomment-1064749070" expanded>

lgtm
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/26#issuecomment-1065315620" expanded>

lgtm
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/46#issuecomment-1067634382" expanded>

> dont merge yet bah, until we settle the tests first.

but then the test that is failing now is the ordermanagertest I think so should be ok? Although the tests that pass might also need some adjustments to make sense
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/47#issuecomment-1067697026" expanded>

Created a logger class in here too please review it!
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/62#issuecomment-1075939891" expanded>

Hey just wanted to add we don't need all the details of each class I think, so when we screenshot the UML diagram for the DG we can just temporarily comment out the methods and attributes for each class
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/68#issuecomment-1076415239" expanded>

> 

As in like when the user inputs '-' to terminate the program the new data won't be saved... So is that by design or what
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/68#issuecomment-1076425030" expanded>

Oh ok it works yup
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/83#issuecomment-1077372676" expanded>

I've decided to change it to name.length() == 0, I realised dish also has the same problem with the isValidName method so I will change accordingly as well

I will push in the next PR thanks
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/97#issuecomment-1080271618" expanded>

Changed a few JUnit tests, including Dish, DishManager and Order JUnit tests after removing isValidName() method from both Dish and Staff classes... So please check thanks!
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/112#issuecomment-1086770363" expanded>

I think I probably copied that part from dish and then forgot to change xd
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/123#issuecomment-1086849370" expanded>

I also prefer the menu way:)
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/163#issuecomment-1093777454" expanded>

Changed the command summary to make it more in line with standard format for command summary
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/119#issuecomment-1094216143" expanded>

Coz for staff u can choose the staff ID, but for dish and order the ID is based on the ordering
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/119#issuecomment-1094216328" expanded>

I personally think there's no issue if staff can choose ID and the rest cannot lah, but up to you all as well
</panel>

</panel>


<panel type="info" header="### 34. NG Y..HONG `@yuzhongng` (11 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825419782" expanded>

Maybe you can overload the constructor to include optional byDate and optional remindDate.
If I have a task with no date specified. I can just call the Task constructor with the description itself.
If I have a task with a byDate specified, I can call the Task constructor with the description and the byDate together. Then you do not need to pass a null value to byDate if the task has no date specified to it in the parser class.  
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825420272" expanded>

Maybe you can try returning String.format() method for easier readability. The method String.format() will have the string representation put together and the variable separated out. 
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825420760" expanded>

You can overload the method too if you overload the task constructor.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825420967" expanded>

Here is what I meant when you can overload the task. You do need to pass empty_string here anymore.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825421168" expanded>

Maybe you can try abstracting the string representation here to a constant.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825777088" expanded>

For eg. 
Task(String description) { }
Task(String description, String byDate) { }
Task(String description, String byDate, reminidDate) { }

Edit function would override description. The date portion would be more troublesome as you need to check whether date is null. But the edit function should probably be implemented in the same way as when you are using 1 constructor
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r826617878" expanded>

We could give a default value to byDate and remindDate outside of the constructor. So we do not need to assign a value to byDate or remindDate when it is not called in the constructor. But I agreed with you that you have to initialize 3 constructors which may be troublesome to read. 
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839744641" expanded>

Here might have issue. If task getDoOnStartDateTime return a empty string. It will crash when it call toLocalDate. Thats why need to check if getDoOnStartDateTime is EmptyString or not.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839748178" expanded>

Perhaps you can move those function that use by timetable only to timetableLogic class
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/161#discussion_r846964566" expanded>

The shortened form is without space. Maybe you can edit it?
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/161#discussion_r846967095" expanded>

TaskList is an class object, maybe you are missing a colon here?
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/31#discussion_r825286032" expanded>

I was checking if the arrayList is empty. Totally forgot about the isEmpty method. I changed it to isEmpty instead
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/38#discussion_r826899409" expanded>

It is a temporary fix to catch all exceptions to prevent the application from crashing. I know it is a bad practice. I will have a proper fix later.
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/38#discussion_r826899786" expanded>

It is a temporary fix to catch all exceptions to prevent the application from crashing. I know it is a bad practice. I will have a proper fix later.
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/44#discussion_r828036004" expanded>

I cannot do that. The else if statement need to be check in the specific order
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/61#discussion_r833138948" expanded>

I am checking if the content in the arrayList in the timetable object is what we expected as defined in the filter method since the filter method defines the timetable object. It is hard to check if the printing format of the timetable is what we expect as we don't have the means to verify the string output in the terminal. 
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/109#issuecomment-1088795409" expanded>

I think the tester meant viewing previous months task recorded. But the current implementation is not possible to view previous months, as it will try to display task in the upcoming future rather than the past
</panel>

</panel>


<panel type="info" header="### 35. HUNG..ARYL `@thedarie` (10 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825325222" expanded>

try to use explicit imports
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825325236" expanded>

think your IDE caused this, perhaps can revert back?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825326227" expanded>

maybe add in an error message here
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825411427" expanded>

maybe rename it to WrongEditInfoFormatException
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/44#discussion_r828006897" expanded>

Maybe can swap line 6 and 7 so that classes in util package are grouped together
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/53#discussion_r830723256" expanded>

I think this block can be refactored to look neater, theres a lot of repeated lines in here
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/53#discussion_r830723473" expanded>

This block is also a bit difficult to read
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/53#discussion_r830723687" expanded>

Thanks for the change here
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/63#discussion_r833356011" expanded>

might be more convenient for yourself if you use an alias like `participant StudyCommand as ":StudyCommand"` so you don't have to keep typing out ":StudyCommand"
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/71#discussion_r834322534" expanded>

thanks for helping to fix typos
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826849860" expanded>

thanks! will fix it 
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826852688" expanded>

yeah sure thing
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826857112" expanded>

do you mean like add a newline at line 53?
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826859865" expanded>

its the indent factor when formatting the json data. will introduce a constant for it
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826866997" expanded>

actually like you've mentioned, i noticed a few other parts of the code where the program expects a Y/N response. perhaps in the future we can create a common method in UI to take in only Y/N responses
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826875003" expanded>

thanks changed!
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826876423" expanded>

yeah it doesn't exceed, will move it accordingly
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826879382" expanded>

are you referring to `t`, `tasks` or `task`? I assume it's `t`? 
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826884458" expanded>

there's actually a couple of magic literals '0' in the Parser class so I am not entirely sure which and what to change it to
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826885499" expanded>

thanks for the suggestion! will add the trim method in
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/39#discussion_r826892861" expanded>

right, thanks for the clarification! will change it accordingly 
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/43#discussion_r827821289" expanded>

thanks for pointing this out, will change it
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/43#discussion_r827825477" expanded>

i disagree because i think parseSavedData should solely handle the conversion of a json object to a task. furthermore, the tasklist will have to be part of the parameter if we make this change which i feel isn't necessary.

the reason why i didn't want to throw an exception was because i wanted to just skip over duplicate tasks instead of aborting the whole 'load' method
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834177649" expanded>

oops im not sure why this class is still here, will remove it
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834179652" expanded>

the identifier is used to identify which tasks are of the same 'recurrence' so if we want to delete all future recurrence of a task its easy to identify them.
for that reason, each 'recurrence' should have a unique identifier and i feel that if we use index based, things can get very ugly when user constantly add and delete tasks
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834310301" expanded>

thanks for the good suggestion, will change accordingly 
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r834320900" expanded>

ok, will add it in the next commit
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/55#discussion_r835042902" expanded>

I agreed that for adding, most of the preparation work can be done in TaskLogic, however for editing and deletion I think it would be better to revise this another time because it might also make sense to involve TaskList class in it as well. (getting list of indexes to be edited, etc)

For now I think a more pressing issue is to work on the non-recurring commands and come back to this at a later time
</panel>

<panel  header="**29 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839733239" expanded>

yes right, was in a hurry and missed this thanks!
</panel>

<panel  header="**30 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839734922" expanded>

yes it does. we check the index cause we want to remove future occurrences as well, but not the past occurrences. 
checking by date instead of index should work the same way since the indexes are based on sorted order anyways
</panel>

<panel  header="**31 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839736512" expanded>

wait i think you are looking at the wrong commit, this seems like an outdated version
</panel>

<panel  header="**32 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839760287" expanded>

it should be fine since do date is a compulsory attribute for all tasks regardless of recurring / non recurring


</panel>

<panel  header="**33 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r839760710" expanded>

as for the second point im not entirely sure which functions are used by timetable so i think it's better if i leave it untouched
</panel>

<panel  header="**34 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/96#discussion_r840206515" expanded>

It's already specified under the 'Edit recurring tasks' section in the command guide
</panel>

<panel  header="**35 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842679753" expanded>

i think your looking at an old commit but the motivation to use offset instead of an absolute date can be shown
assume you have a recurring task:
5th april 2022 
6th april 2022
7th april 2022

say the 6th april task is deleted, we are left with the 5th and 7th april tasks. if the user decides to edit 5th april to 10th april, without offset the tasklist becomes like this
10th april
11th april

whereas if you use offset it becomes
10th april
12th april

also, by using offset we can make do without the 'frequency' attribute since we just need to shift the dates by the calculated offset
</panel>

<panel  header="**36 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842682366" expanded>

ok, thanks! this was added before your pr was merged. i'll remove it 
</panel>

<panel  header="**37 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842682925" expanded>

got it, will do that. thanks!
</panel>

<panel  header="**38 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842685579" expanded>

err i think you may have highlighted the wrong line, can you edit it?
</panel>

<panel  header="**39 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/138#discussion_r842688743" expanded>

got it. thanks!
</panel>

<panel  header="**40 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/144#discussion_r844009762" expanded>

I was choosing between the two and I was afraid by combining the statement it becomes difficult to read. If you think this is the better way to go, i can change it
</panel>

<panel  header="**41 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/151#discussion_r846605457" expanded>

good catch thanks!
</panel>

<panel  header="**42 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/95#issuecomment-1084712254" expanded>

the first two lines can be removed, a more concise test case is:

add testing3 /do 1/4/2022 /start 11:00 /end 12:00 /repeat WEEKLY
edit 8 /do 18/5/2022 /start 10:00 /end 12:00 /repeat
edit 9 /do 18/05/2022 /start 11:00 /end 12:00 /by 30/5/2022

notice if you try to edit 8 into conflict with 7, it does detect a clash. weird bug

</panel>

<panel  header="**43 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/111#issuecomment-1087311882" expanded>

technically not a bug since UG states that parameters for edit is [task description] [/do /start /end] i.e. you cannot have /start parameter as a standalone.
</panel>

<panel  header="**44 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/99#issuecomment-1095149661" expanded>

will fix in future iterations
</panel>

</panel>


<panel type="info" header="### 36. SIM ..MILY `@emilysim00` (10 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/21#discussion_r822327933" expanded>

I suggest to remove the smiley face at the back and front as the other help commands did not include such emoji. I feel it is a bit out of place. 
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841044797" expanded>

i agree with musfirah, perhaps the execute() could be excluded from the diagram
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/220#discussion_r841044856" expanded>

i think there is an extra "-" between characters and phrases
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/240#discussion_r841716737" expanded>

I just realized that in our DG we classified as 5 main features but in UG we classified as 4. Should we standardize this?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/240#discussion_r841721064" expanded>

Should the title be **Repetitions**? Because saying Reps is abbreviated to 'reps' might not be explaining anything.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/240#discussion_r841724327" expanded>

nice diagram!
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841726242" expanded>

Thanks for making it consistent with the user guide! Good Job!
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841728017" expanded>

Perhaps you might want to add a bit of description so reader can understand it better.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841728658" expanded>

Perhaps you might want to add a bit of description of what you have reviewed?
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/239#discussion_r841729376" expanded>

nice diagram!
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r820526193" expanded>

Good suggestion! Thanks
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/20#discussion_r821281411" expanded>

I agree. 
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831508885" expanded>

> is schedulePrintList being used anywhere?
yes, schedulePrintList will be used for the view feature which will be created in another branch
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831510241" expanded>

okay, will take note of this for next commit. Thanks!
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/105#discussion_r831516791" expanded>

Good suggestions will implement it
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/125#discussion_r833476526" expanded>

Can you elaborate further? I do not quite understand what you mean? This listall feature will display all workouts in the workoutlist and the list feature will display at most 10 workouts at a time. [advance feature]
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/125#discussion_r833485222" expanded>

The index is changing every time it loop. As the index+1 is use as the number formatting during printing
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835856719" expanded>

Yes, i agree with you 
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835856874" expanded>

i tried omitting it but the overview of the sentence will look very cramp
</panel>

<panel  header="**20 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835879172" expanded>

Is there any suggestions on how can we go about to explain it clearer?
</panel>

<panel  header="**21 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835879251" expanded>

Noted, will remove it
</panel>

<panel  header="**22 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835879454" expanded>

alright, will amend the user guide. thanks for the suggestions
</panel>

<panel  header="**23 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835879567" expanded>

thanks for spotting
</panel>

<panel  header="**24 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/140#discussion_r835879822" expanded>

i feel like we should not because, for beginners, in my mindset it is like having the need to teach them on how to carry out each exercise but in our application, we are not doing so
</panel>

<panel  header="**25 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/249#discussion_r843427919" expanded>

Thanks for pointing that out!
</panel>

<panel  header="**26 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/272#discussion_r844902238" expanded>

thanks for pointing out this mistake
</panel>

<panel  header="**27 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/272#discussion_r844903059" expanded>

thanks for spotting this mistake
</panel>

<panel  header="**28 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/272#discussion_r845655272" expanded>

okay, will make the changes
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/39#issuecomment-1064799562" expanded>

PR #38 has some JUnit tests for list workout function in WorkoutList.java
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1066785300" expanded>

PR #45 has documentation for create workout function
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1066787633" expanded>

PR #55 has documentation for delete workout function
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1066818328" expanded>

PR #58 has documentation for list workouts function
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/82#issuecomment-1074392298" expanded>

Completed schedule update feature in PR #105
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1075886558" expanded>

PR #117 has documentation for schedule features 
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/123#issuecomment-1076574457" expanded>

Looks good!
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/57#issuecomment-1079922638" expanded>

PR #140 contains suggestions given by CS2101 other group members 
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/issues/103#issuecomment-1087076956" expanded>

#234 has Junit test case for schedule features
</panel>

</panel>


<panel type="info" header="### 37. TEO ..RONG `@tjiarong` (9 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/78#discussion_r827173180" expanded>

Not aligned with text at same level
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/242#discussion_r845286335" expanded>

Same idea as above, can consider using String.format with constants.

</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/242#discussion_r845286629" expanded>

Possibly consider using String.format instead and shifts the value into constants.

E.g. String.format(CONSTANT, args)
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/242#discussion_r845289652" expanded>

Consider shifting money string into constants
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/242#discussion_r845290006" expanded>

Consider shifting money string into constants
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/242#discussion_r845290084" expanded>

Consider shifting money string into constants
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/244#discussion_r845389437" expanded>

Consider refactoring out the inner code logic to better adhere to SLAP
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/244#discussion_r845390899" expanded>

![image](https://user-images.githubusercontent.com/69455499/162260409-131ea555-9a15-43b1-9d5b-e7cfb0dffc5c.png)
He did mention this in the DG regarding PlantUML's limitation
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/244#discussion_r845393276" expanded>

Since this diagram is Huilin's one, think might be better to suggest this to huilin instead as si zheng is just updating the constants
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/163#issuecomment-1082207060" expanded>

You have some checkstyle bugs in your command class, can try running check script under verification in gradle to make everything is ok 
</panel>

</panel>


<panel type="info" header="### 38. MCMO..GLAS `@johnmcmonigle` (8 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/35#discussion_r827246092" expanded>

I agree that it is a good idea to take away the magic numbers; this is a good solution
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/60#discussion_r833954759" expanded>

I agree with this change and that it will help with the single responsibility principle.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/60#discussion_r833954939" expanded>

Good NFR
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/60#discussion_r833955799" expanded>

These should allow for more informative output to the user
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/60#discussion_r833956492" expanded>

After looking through all of the newly added command classes, they all seem functional and well-implemented
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/73#discussion_r838733599" expanded>

I think the overview of the main components is needed, and a very good idea
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/73#discussion_r838733863" expanded>

Same comment as above; very good addition
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/73#discussion_r838734718" expanded>

This restructure seems perfectly fine 👍 
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/16#discussion_r823719170" expanded>

Good point; I will add it to the issues tracker
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/76#discussion_r839477274" expanded>

Fixed 👍 
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/16#issuecomment-1062783611" expanded>

The code in this PR does not update the 'input.txt' and 'EXPECTED.txt', so it fails the I/O redirection test. I believe we can fix this upon merging
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/29#issuecomment-1067576445" expanded>

Code looks going; going to go ahead and merge.

I agree with renaming the print method to printDetails for clarify. If we agree during our group meeting today, we can commit this change.
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/66#issuecomment-1081971068" expanded>

Code looks functional and well written; if we have time before the milestone to add new components to the project, this code should be easy to modify for saving 
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/68#issuecomment-1082086627" expanded>

Resolved a small conflict—code was discussed in a group meeting and all looks good!
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/76#issuecomment-1084297106" expanded>

Working on fixing merge conflicts
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/80#issuecomment-1084575843" expanded>

Discussed during group meeting and worked on it together. Everything looks good!
</panel>

</panel>


<panel type="info" header="### 39. BATE..OBIA `@danbaterisna` (8 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827518378" expanded>

Good decision to factor out the Lists class from being a global variable. Since it contains only a single expenditure list, I'd like to know why it's named `Lists` (plural). Would `ExpenditureList` be better?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827520883" expanded>

I see this in the other `Command` classes, but I think `listArray` is a redundant name, since `list` and `array` are both words that suggest that the parameter contains some collection. I also think `itemList` isn't that descriptive (what kinds of items does it store?). Consider a name like `expenditureList`?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/41#discussion_r827522221" expanded>

Consider setting `itemList` to private, and exposing a getter method for better encapsulation?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833467611" expanded>

Consider returning the total expenditure instead, and have the caller deal with printing the result, to improve SLAP.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833489394" expanded>

Consider making this attribute private, and exposing a getter to it, to improve encapsulation.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833490476" expanded>

I see this comment in a few other places in the code. If the implementation of the new add command is complete, you may remove it.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/69#discussion_r833495135" expanded>

I think `if (parsedCalculateInput[INDEX_OF_FIRST_ITEM_IN_STRING].toLowerCase().equals(FLAG_OF_EXPENDITURE_PER_MONTH))` better communicates your intent here, since you're only checking one case in the `switch`. If line length is an issue, you can consider storing the string compared to `FLAG_OF_EXPENDITURE_PER_MONTH` in a separate variable first.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/pull/206#discussion_r846927389" expanded>

If you intend to throw an error when the limit amount is at least 50,000, then should this be `>=`?
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T10-4/tp/issues/134#issuecomment-1087913469" expanded>

Duplicate of #135. This bug has the same root cause as that one: `PropertyList#getValue` not checking if the required property is there.
</panel>

</panel>


<panel type="info" header="### 40. TOH .. JIE `@yanjie1017` (7 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/108#discussion_r834011884" expanded>

Since 'all' is a reserved keyword, we may need to check if the input name equals 'all'. Raise exception if name equals 'all'.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/108#discussion_r834022291" expanded>

Can consider get the timetable using getByName method in MasterTimetable.
And the exception thrown can be handled in the execute function.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/108#discussion_r834026539" expanded>

Better to make the attributes private so that it is more secured unless there's a need to access it publicly
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/126#discussion_r835854392" expanded>

Can consider do the check methods checkIfClash() and checkIfMeetingExistAlready in the addMeetingToEveryoneTimetable() 
and then can throw error when the check fails in the addMeetingToEveryoneTimetable()
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/126#discussion_r835854456" expanded>

Good to extract addMeeting method to the MasterTimetable class instead of doing it in prepareAddMeeting function! 
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/126#discussion_r835854781" expanded>

If there any possible exceptions that we didn't catch specifically?
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/132#discussion_r835856879" expanded>

We can have a Common class in the future to store some common methods such as truncateString and so on.
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/54#issuecomment-1067562520" expanded>

Looks good!
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/64#issuecomment-1068729823" expanded>

The link to download jar file requires update.
</panel>

</panel>


<panel type="info" header="### 41. TAN ..I LI `@tanweili` (7 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/37#discussion_r825984020" expanded>

@wraineflores @shxr3f I'll merge first since this is a relevantly small issue and I want to get an overview of the current code we have in IDE hope y'all don't mind
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827592923" expanded>

Should this placeholder be changed soon?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/77#discussion_r832847382" expanded>

I think this one should be !validateFullName for the current state of the code? 
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/77#discussion_r832847827" expanded>

This one also, the current validateFullName returns true if the name is compliant. So it will currently make isValid false whenever a valid name is given.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/89#discussion_r833995795" expanded>

Can make an if statment with the return boolean value of the validator
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/135#discussion_r838568669" expanded>

I think add &gt;br> under all the .png to ensure that the para is below
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/183#discussion_r845764659" expanded>

I think this can be done in another PR and account for the other commands as well.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r823362222" expanded>

Yep thanks.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r823791542" expanded>

Yeah thanks for pointing out
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r823793027" expanded>

Also can. But I think let's focus on getting all the three Patient, Medicine and Doctor up first before thinking about more OOP refactoring
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/96#discussion_r835724911" expanded>

It shouldn't be null because in Parser there is 
'    public static Command parseViewAppointment(String parameters) throws HalpmiException {
        String[] viewAppointmentParameters = minParameterCheck(parameters, 2);
        return new ViewAppointmentCommand(viewAppointmentParameters);
    }'
which verifys that it should be length 2
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/96#discussion_r835724974" expanded>

It's will throw the HalpMiException stating there is parameters missing
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/96#discussion_r835725036" expanded>

To adhere to the abstract list class methods
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/18#issuecomment-1062822135" expanded>

Looks good to me for the parts in the UI class!
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/20#issuecomment-1062878884" expanded>

Yep looks okay for me. Can merge it into master
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#issuecomment-1063704565" expanded>

Should we use regular expression for validation for some of the parameters like what I written above?
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/30#issuecomment-1064134850" expanded>

Ok then I'll reopen one for mine PR
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#issuecomment-1065224015" expanded>

I think this PR is getting too long. Pls help to review and see if can merge coz I have done some edits to common lines of code that probably will affect y'all parts. I'll try to be more specific in my PR from now.
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/39#issuecomment-1067510991" expanded>

Fixed by #40 
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#issuecomment-1075148210" expanded>

To facilitate proper add appointment feature, will require find patient and doctor nric feature to check if input is valid. @wraineflores 
</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/76#issuecomment-1075956463" expanded>

@kktai1512 Abstract validator probably needs to account for new code added for Appointment when merging. @wraineflores will implement finding after your filter/finding for doctor/patient
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/81#issuecomment-1076014178" expanded>

To reopen new PR due to #80 code changes for this same updates to UI
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/86#issuecomment-1076416915" expanded>

PUML diagram shall be added in future PR.
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/56#issuecomment-1077606255" expanded>

Found this to be implemented by PR #89
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/58#issuecomment-1077753014" expanded>

Implemented in PR #89 also
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/90#issuecomment-1077794851" expanded>

Currently doing, hopefully up by saturday
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/67#issuecomment-1077795541" expanded>

Likely to be done / started on due to the integration of the appt code into the current code by saturday also.
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/114#issuecomment-1079943087" expanded>

Book appointment issue shoule be already previously implemented accordingly to what i understand of our previous discussion.
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/121#issuecomment-1080749675" expanded>

LGTM!
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/132#issuecomment-1083143931" expanded>

Change top content table part from common classes to asset classes
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/137#issuecomment-1084387830" expanded>

LGTM!
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/138#issuecomment-1087513758" expanded>

Perhaps the error message can include numbers if possible
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/140#issuecomment-1087515412" expanded>

Statistically it's extremely unlikely to hit that age. I am not inclined on increasing the limit in case of a slippery slope situation.
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/144#issuecomment-1090448960" expanded>

Error due to UG DG not being update in time. Fixing in PR #178 
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/178#issuecomment-1090449625" expanded>

#144 fixing together with commit that fixes #143
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/146#issuecomment-1090451666" expanded>

Fixing in PR #178 
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/178#issuecomment-1090452584" expanded>

#146 fixing together with commit for #143
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/147#issuecomment-1090454179" expanded>

Fixing in PR #178 
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/178#issuecomment-1090454634" expanded>

#147 fixing together with commit that fixes #143 
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/149#issuecomment-1090472095" expanded>

Fixing in PR #147
</panel>

<panel  header="**41 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/178#issuecomment-1090473379" expanded>

#149 fixing together with #148
</panel>

<panel  header="**42 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/151#issuecomment-1090482652" expanded>

This is an additional feature getting implemented in PR #178 
</panel>

<panel  header="**43 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/178#issuecomment-1090483541" expanded>

#151 issue is regarding the main feature added in this branch 
</panel>

<panel  header="**44 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/184#issuecomment-1091714722" expanded>

No review needed as draft PPP does not have much details yet. I will just merge.
</panel>

<panel  header="**45 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/142#issuecomment-1094062244" expanded>

Fixed in PR #189
</panel>

<panel  header="**46 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/145#issuecomment-1094062558" expanded>

Fixed by PR #189 
</panel>

<panel  header="**47 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/150#issuecomment-1094063422" expanded>

The error message is correct. The date of admission parameter is in the wrong format.
</panel>

<panel  header="**48 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/167#issuecomment-1094064774" expanded>

![NickYoung](https://user-images.githubusercontent.com/69900891/162580105-64bd483f-9345-4ca1-a827-b20d714fedb4.jpg)

</panel>

<panel  header="**49 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/203#issuecomment-1094837200" expanded>

Looks good to me!
</panel>

</panel>


<panel type="info" header="### 42. TAI ..IANG `@kktai1512` (7 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r823784857" expanded>

is  camelCase naming more appropriate?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/29#discussion_r823787078" expanded>

am thinking perhaps can abstract out all the validators to a validator class separate from parser
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/45#discussion_r827035973" expanded>

maybe getSize would be a better name considering its a method?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/45#discussion_r827040167" expanded>

is the actual deleting not included?

should be calling medicineList.delete bla bla right
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/50#discussion_r827898998" expanded>

perhaps just use "\n " and concatenate instead of multiple printlines
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/50#discussion_r827899443" expanded>

is this method necessary?
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827901814" expanded>

are we deleting by index or nric ah not sure 
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/80#discussion_r832928347" expanded>

the print paragraph is a static method sooo i just used UI. i think actually moving on we can j change all ui into static methods maybe! tbd 
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/77#issuecomment-1075972704" expanded>

ignore this
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/85#issuecomment-1076978863" expanded>

solves #87  too
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/154#issuecomment-1094062593" expanded>

#190 
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/161#issuecomment-1094062697" expanded>

#190 
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/158#issuecomment-1094064726" expanded>

#190 
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/150#issuecomment-1094067541" expanded>

#190 
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/152#issuecomment-1094067610" expanded>

#190 
</panel>

</panel>


<panel type="info" header="### 43. LEST.. JUN `@lestersimjj` (6 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/85#discussion_r839047973" expanded>

Are we able to directly use Item constructor here instead of creating a static method `generateItem`? 

```suggestion
    public static final Item ITEM_MARKER = new Item(MARKER_NAME, MARKER_QUANTITY, MARKER_DESCRIPTION);
```
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/85#discussion_r839138185" expanded>

I see, okay.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/97#discussion_r839424834" expanded>

`record.getBorrowerName()` returns a String
`name` is an Optional Class

Might need to use name.get() to extract the String from the Optional<String> class to compare the two?

```suggestion
                    if (record.getBorrowStatus() == BorrowStatus.PAST && record.getBorrowerName().equals(name.get())) {
```
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/130#discussion_r845602455" expanded>

Might have a missing ending bracket "}" on line 49?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/120#discussion_r846601888" expanded>

Will this section still be required?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/185#discussion_r846786224" expanded>

Return statement not required in void method?
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/17#issuecomment-1069241787" expanded>

Updated Command Class and removed storage from parameters
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/80#issuecomment-1084368202" expanded>

Fix by #102 
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/81#issuecomment-1084635746" expanded>

Fix by #104 
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/82#issuecomment-1084635998" expanded>

Fix by #104 
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/150#issuecomment-1089988171" expanded>

Fix by #163 

End Date now has to be >= Start Date.
Otherwise, an exception about the wrong date ordering will be thrown.
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/100#issuecomment-1089991097" expanded>

Fix by #163 

Reference to #150 
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/153#issuecomment-1090011938" expanded>

Fix by #163 

Index is 1-based indexing and an exception is now throw if it is out of bounds.
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/155#issuecomment-1090019423" expanded>

Fix by #163 

Updated user guide.
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/149#issuecomment-1090020322" expanded>

Fix by #163 
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/129#issuecomment-1090020794" expanded>

Fix by #163 
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/140#issuecomment-1090049046" expanded>

This is caused by the index being out of range from the itemList. It now throws an exception if the user enters an index outside of the item list size.

Fix by #163 
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/138#issuecomment-1090049546" expanded>

Fix by #163 
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/159#issuecomment-1090180709" expanded>

Fix by #163 

An exception is thrown if the user enters a borrowing that conflicts with existing borrowings.
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/147#issuecomment-1090187668" expanded>

Fix by #163 

An exception is thrown if the user enters a borrowing that conflicts with existing borrowings.
</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/124#issuecomment-1090188934" expanded>

Fix by #163 

An exception is thrown if the user enters a borrowing that conflicts with existing borrowings.
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/142#issuecomment-1090192176" expanded>

Fix by #163 

Update to user guide.
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/146#issuecomment-1090194368" expanded>

Fix by #163.

Update to user guide.
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/139#issuecomment-1090198232" expanded>

Have already implemented under `desc` command.

Format:  `desc INDEX`

```
> desc 1
Name of Item: JBLFlip5
Description: Waterproof up to 3m, fully charged batteries can last for 5 hours, bluetooth enabled.
```

Please refer to [UserGuide ](https://github.com/AY2122S2-CS2113-F10-2/tp/blob/master/docs/UserGuide.md#get-description-of-item-desc).
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/157#issuecomment-1090305047" expanded>

Fix by #163 

Add help messages for borrow command.
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/145#issuecomment-1091860990" expanded>

Fix by #119 
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/162#issuecomment-1092407232" expanded>

Fix by #179 
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/160#issuecomment-1092423414" expanded>

Wrote methods to abstract the arrowhead codes for a similar issue in `ListCurrentBorrowingsCommand`. #179 might be helpful for you too
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/164#issuecomment-1092599596" expanded>

Fix by #179 
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/123#issuecomment-1093915997" expanded>

Fix by #181.

User can now specify the quantity to borrow.
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/152#issuecomment-1093916250" expanded>

Fix by #181.

User can now specify the quantity to borrow.
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/177#issuecomment-1093943538" expanded>

Fix by #181.

Users can now only borrow up to 7 days.
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/168#issuecomment-1093953392" expanded>

Fix by #181 
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/111#issuecomment-1094201760" expanded>

Fix by #181 
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/182#issuecomment-1094281978" expanded>

#189 
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/116#issuecomment-1094679181" expanded>

Fix by #190 
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/158#issuecomment-1094695792" expanded>

Fix by #163
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/182#issuecomment-1094702173" expanded>

@quitejasper Nope, we don't have to show borrow records of lost items.

When items are lost, they are deleted from the internal itemList. If we run `listcb`/ `listfb`/`listob` commands, it iterates through the itemList which now do not consist of lost items.
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/183#issuecomment-1094706897" expanded>

Fix by #190 
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/131#issuecomment-1094869124" expanded>

Fix by #206 to hide foot box (class names) for sequence diagrams and update Command class diagrams.
</panel>

</panel>


<panel type="info" header="### 44. WANG..YING `@Nineves` (5 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/16#discussion_r823423411" expanded>

Maybe we need to add description to a project?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/29#discussion_r825723488" expanded>

Maybe we can change the name to printDetails?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/30#discussion_r826595730" expanded>

It is nice to move display functions to Response class
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/38#discussion_r827843920" expanded>

Maybe we can extract a method to concatenate all the strings in commands?
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/38#discussion_r827848451" expanded>

I like how you refactor the magic numbers!
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/16#issuecomment-1063765859" expanded>

From Gradle's document: "The TaskExecutionException is thrown when a task fails to execute successfully." I agree with you that it is not an error in our code. I think the exception is thrown because we stop the program halfway, and Gradle will take it as an unsuccessful execution?
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/issues/41#issuecomment-1069061994" expanded>

added tests for command mark and todo
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/62#issuecomment-1077629822" expanded>

UG is well documented :D
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/71#issuecomment-1083128619" expanded>

Code is well written and looks functional!
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/74#issuecomment-1084105833" expanded>

The code is well written and organized!
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/issues/124#issuecomment-1093624362" expanded>

Solved the issue
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/issues/119#issuecomment-1093843766" expanded>

solved
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/issues/100#issuecomment-1093843981" expanded>

no new function will be added in ver 2.1
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/issues/121#issuecomment-1093857785" expanded>

I don't think we need 'pictures' in UG? since we've already got example of usage and output
</panel>

</panel>


<panel type="info" header="### 45. BRYA..PHER `@Bryan-BC` (5 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/32#discussion_r828957585" expanded>

Would it be okay if we have the same method name addEquipment?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/32#discussion_r828960285" expanded>

Could you tell me what these two methods do?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/63#discussion_r833984035" expanded>

Same comment for this one is it possible to implement without the casting?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/136#discussion_r846644689" expanded>

Nice addition with the MESSAGE makes it clearer
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/137#discussion_r846644925" expanded>

Is this test for the list t/`type`? if it is, do we still need it?
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830790400" expanded>

Will do!
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/53#discussion_r830792125" expanded>

OK! Will change the else if into else. Also I changed into put instead of putIfAbsent since we checked the absence of it on the if else clause.
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/83#issuecomment-1086890805" expanded>

Duplicate of #100 
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/84#issuecomment-1086891003" expanded>

Duplicate of #107 
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/82#issuecomment-1086891398" expanded>

Duplicate of #103 
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/87#issuecomment-1086891532" expanded>

Duplicate of #103 
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/issues/88#issuecomment-1086891609" expanded>

Duplicate of #103 
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-2/tp/pull/114#issuecomment-1088395116" expanded>

LGTM
</panel>

</panel>


<panel type="info" header="### 46. KANG..HERN `@IncompetentDev` (4 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/198#discussion_r847111337" expanded>

Refactor magic string to common/Messages
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/216#discussion_r847309004" expanded>

Punctuation for javadocs at end of sentence

Possible "as list" typo?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/216#discussion_r847309337" expanded>

Punctuation at end of sentence.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/206#discussion_r847336247" expanded>

Could add **Normal Function** and **Error Handling** subheaders? See Editcommand/searchcommand
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/85#discussion_r839136333" expanded>

In the future, if Item() constructor has any changes I think it'd be easier to maintain generateItem instead of new Item() calls every time. Thoughts?
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/34#issuecomment-1070429935" expanded>

Closed and reopened to run Github Actions (was down yesterday)
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/42#issuecomment-1070787148" expanded>

Maybe fix for 2.0
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/47#issuecomment-1071004546" expanded>

./gradlew check was run locally and passed. 
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/52#issuecomment-1077526504" expanded>

Changes will be bundled with dev guide commits
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/67#issuecomment-1081684652" expanded>

This facilitates optional fields needed for searching and editing items.
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/68#issuecomment-1081890345" expanded>

JUnit tests will come in a separate PR.
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/84#issuecomment-1083521669" expanded>

See #85 for stubs.
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/87#issuecomment-1084047957" expanded>

Wrongly closed.
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/89#issuecomment-1084049477" expanded>

Note: AB Parser will perform a trim() on the argument values, so 

`add n/Paper Cup q/25 d/100ml paper cups`
`add n/ Paper Cup q/ 25 d/ 100ml paper cups`

will effectively add the same two `Item`s.
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/89#issuecomment-1084049857" expanded>

![image](https://user-images.githubusercontent.com/26570382/160974170-992db895-4d0e-4817-a2dc-456127f2c248.png)

</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/83#issuecomment-1084065365" expanded>

It is not due to `ArrayList`.

`java.time.LocalDate.year` is the offending class.

'''WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by com.google.gson.internal.reflect.ReflectionHelper (file:/C:/Users/KHT/.gradle/caches/modules-2/files-2.1/com.google.code.gson/gson/2.9.0/8a1167e089096758b49f9b34066ef98b2f4b37aa/gson-2.9.0.jar
) to field java.time.LocalDate.year
WARNING: Please consider reporting this to the maintainers of com.google.gson.internal.reflect.ReflectionHelper
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release'''
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/42#issuecomment-1084086634" expanded>

AB3 Parser does not use hard-coded indexing, so this issue is now resolved.
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/74#issuecomment-1084315222" expanded>

Moved to #103 
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/134#issuecomment-1091025022" expanded>

See #83 
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/36#issuecomment-1093403825" expanded>

I caught the wrong exception, see #143 

</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/143#issuecomment-1093404047" expanded>

Wrong exception caught :X

Should have caught IndexOutOfBounds, not ArrayIndexOutOfBounds.
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/156#issuecomment-1093408481" expanded>

Resolution:
1. Check `arguments` in `InputParser` before creating `ListCommand`. This issue extends to `ExitCommand` and `HelpCommand` as well, since they are created without checking `arguments`.
2. OR inform user through user guide that these commands will disregard additional arguments?
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/183#issuecomment-1094074881" expanded>

This may have other unintended consequences, but I cant think of any right now.
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/190#issuecomment-1094262645" expanded>

May need some post-processing for DG pngs to trim lifelines after termination, because plantuml seems to be limited in that regard.
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/183#issuecomment-1094272423" expanded>

Let's just fix this through a note in the user guide.
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/161#issuecomment-1094474823" expanded>

First screenshot is from ArgumentTokenizer.

Second screenshot is from SearchCommand.
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/194#issuecomment-1094515157" expanded>

Try checking parseQuantity() in parserUtils. I doubt we have special case of 0 quantity allowed anywhere in the program.
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/173#issuecomment-1094515538" expanded>

#190 adds command format for EditCommand and SearchCommand.
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/84#issuecomment-1094516105" expanded>

As of writing:

AddCommandTest
BorrowCommandTest
DescCommandTest
ItemTest

can use the stubs in ItemStubs.
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/84#issuecomment-1094556598" expanded>

Refactored AddCommandTest in #190 
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/144#issuecomment-1094651997" expanded>

Duplicate of #143 
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/103#issuecomment-1094672532" expanded>

1. Done - #190 
2. Partially done on my end - #190 
3. Partially done on my end - #190 
4. Nothing for now
5. AddCommandTest refactored - #190 
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/84#issuecomment-1094686266" expanded>

Moved to #103 
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/166#issuecomment-1094690091" expanded>

There's no time to fix the second part, a caveat will be added for users to NOT touch the json.
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/166#issuecomment-1095125675" expanded>

Bundled with #209.
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/203#issuecomment-1095153707" expanded>

#205 and #209  should fix this
</panel>

</panel>


<panel type="info" header="### 47. LIU ..NRAN `@striris` (4 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/pull/11#discussion_r825634961" expanded>

can you use double for price, thanks!
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/pull/11#discussion_r825635403" expanded>

Please add in getter and setter for all the classes and all the attributes! thank you! They will be needed.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/pull/11#discussion_r825635556" expanded>

can you delete the space before the name.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/pull/11#discussion_r825636264" expanded>

category and product type are different. 
category: product/ subscription
product type is only for product class: fashion, food, electronics

please make the modifications accordingly! it is quite impt
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/48#issuecomment-1087678203" expanded>

can put 'do not change the content of file'' in user guide and show in the terminal 
ug add a constraint for i put:  and don't use '|' in the input field
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/44#issuecomment-1087682348" expanded>

elon musk wouldn't use this app
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/43#issuecomment-1087684283" expanded>

put in user guide. only enter positive integer within 0-9999999
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/68#issuecomment-1094274238" expanded>

the ug has been updated to not allow file changes on the  user side
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/63#issuecomment-1094622628" expanded>

cannot recreate the error
</panel>

</panel>


<panel type="info" header="### 48. JUST..IREN `@mafpovbul` (4 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/270#discussion_r840182788" expanded>

Well explained and clear cut
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/270#discussion_r840183446" expanded>

Rather than the partial class diagram above, would it be clearer if you provided a sequence diagram instead? To show the execution of the AddItemCommand
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/247#discussion_r840184652" expanded>

The words in the diagram are rather small and slightly hard to read, maybe can increase the font size?
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/247#discussion_r840185650" expanded>

Great explanation, but maybe could cut down on the level of technicality to make it more readable?
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/72#issuecomment-1086557189" expanded>

Was an issue with array indexes when parsing through saved data, added in exception handling, should be fine now
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/75#issuecomment-1086559807" expanded>

Issue with packages command printing the "ID" using the for loop. Changed to a getID() method
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/71#issuecomment-1086567055" expanded>

Added date exception handling
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/55#issuecomment-1086567151" expanded>

Added "No reservations added yet!" message
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/56#issuecomment-1086567256" expanded>

Added conditional parsing for cases with no reservations, and extra exception handling.
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/74#issuecomment-1086570719" expanded>

Previously using index to assign package id, and so index was also used to find packages.
Changed logic to find package by package id instead.
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/76#issuecomment-1086572566" expanded>

Created package id display column
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/59#issuecomment-1086578151" expanded>

done bro
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/61#issuecomment-1086578259" expanded>

to update UG to include commas
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/62#issuecomment-1086578568" expanded>

Added print newline
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/41#issuecomment-1086579135" expanded>

Added more user-friendly comments: 
"Saved file not found!"
"saved file loaded!"
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/58#issuecomment-1086581841" expanded>

Date validity done
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/50#issuecomment-1086582311" expanded>

Date validity done
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/47#issuecomment-1086582490" expanded>

added package id in display
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/43#issuecomment-1086582668" expanded>

to update documentation
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/31#issuecomment-1086583361" expanded>

Storage Exception handling added
</panel>

</panel>


<panel type="info" header="### 49. TANG..ANKE `@FTang21` (4 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/33#discussion_r826867683" expanded>

I think is a leftover from merge conflict
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/33#discussion_r826868605" expanded>

This looks unused, maybe remove it?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/33#discussion_r826870547" expanded>

Not that important, but you can change this to simply return count and return -1 otherwise. `index` is technically not that necessary
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/76#discussion_r839478551" expanded>

Error might be coming from this? Not sure if "What can I help you with next?" is duplicated here
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/21#issuecomment-1066036024" expanded>

PR looks good! I just want comment something, it might be good to change the `viewProject` to `listProjects`. Because we are having a separate command that "views into the details" of a designated project. 
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/37#issuecomment-1068948289" expanded>

Looks good!
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/69#issuecomment-1082959577" expanded>

lgtm!
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/issues/126#issuecomment-1092937081" expanded>

No new features will be added for v2.1
</panel>

</panel>


<panel type="info" header="### 50. NG J..WARD `@Nnythingy` (4 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/28#discussion_r831117411" expanded>

@tuan0369 i think my old regex might be wrong but this `(?&gt;flag>[og])/` should be right to get the correct flag
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/28#discussion_r831117844" expanded>

anyways i think for consistency we should use o/ instead of -o?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/92#discussion_r846646684" expanded>

```suggestion
            System.out.println("Item with SKU: " + sku + "already exists in the warehouse. "
                    + "Please check the SKU again.");
```
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/92#discussion_r846646723" expanded>

for checkstyles
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/17#discussion_r825330994" expanded>

removed the printing of total number of inventories
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/17#discussion_r825331072" expanded>

remove duplicate
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/27#discussion_r830087300" expanded>

pseudocode for how i think loading a file in will look w.r.t. how to initialise the warehouse capacity
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/27#discussion_r830089118" expanded>

added description
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/27#discussion_r830090942" expanded>

my current implementation of how order would hold the arraylist of goods, change as per required please @tuan0369 
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/18#issuecomment-1067582873" expanded>

Thanks for the update!
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/issues/38#issuecomment-1085681685" expanded>

hi @chooyikai, thanks for the feedback, we know about this issue, sorry for your troubles
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/90#issuecomment-1094065299" expanded>

https://nusu-my.sharepoint.com/:w:/r/personal/elclwa_nus_edu_sg/_layouts/15/Doc.aspx?sourcedoc=%7B177858EE-9D60-4152-A860-57C98C9B88C5%7D&file=11.1%20UG%20consultations.docx&action=default&mobileredirect=true

Rubrics for 2101 UG
</panel>

</panel>


<panel type="info" header="### 51. ISAA..ZILE `@laiisaac` (4 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825923377" expanded>

Might be a small nit-pick but maybe could group the imports which are related together (util, exception) and perhaps add a line between groups.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/37#discussion_r825959304" expanded>

Just to pen down what we discussed during the meeting - perhaps we can add a method in Parser to parse the parameters (e.g. if theres no deadline then we set it to null) and then pass all the parameters to the task constructor.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/44#discussion_r827996918" expanded>

Maybe can create methods so that code is readable, and group similar return blocks together. For example, `task.getByDate() == null` can be `taskHasNoDeadline` and you can group `task.getByDate() == null` and `task.getDoOnDate() == null` in the same if statement e.g. `if (task.getByDate() == null && task.getDoOnDate() == null)`
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/137#discussion_r842412007" expanded>

Thanks for refactoring this part, was unsure if this was the best way to do it
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825327351" expanded>

Yup, changed all the import *.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825327901" expanded>

This is an exception where the timer thread is interrupted (stopped e,g, when user manually stops the timer) so that the program will keep running. I added a return statement to satisfy the checkstyle error since we will not be printing an error message for the exception.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825327967" expanded>

Will be trying to fix the remaining checkstyle errors
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825603791" expanded>

Yes, will work on refactoring the code for readability, then improving the UI if time permits
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825627609" expanded>

Yes, for testing purposes we have a short timer to see what happens when the timer ends naturally.
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825758141" expanded>

Yup, will work on this on the next commit
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825770572" expanded>

Yes it is `TimerLogic.StartTimer`, but im not sure when it should just be `TimeLogic.StartTimer` instead of `StartTimer`
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825771352" expanded>

It basically deducts one second off the timer.
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825776265" expanded>

Added in the next commit
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825780114" expanded>

Included in the next commit
</panel>

<panel  header="**15 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825789179" expanded>

InterruptedException is thrown when thread is interrupted (killed) while sleeping, waiting, or otherwise occupied. But i dont really understand your question
</panel>

<panel  header="**16 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825792823" expanded>

Yes, thanks for pointing it out, corrected in the next commit
</panel>

<panel  header="**17 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825795902" expanded>

Okay, corrected in the next commit
</panel>

<panel  header="**18 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/36#discussion_r825801261" expanded>

Unfortunately, we cant use pause or resume because the Thread class it extends from uses pause() and resume().
</panel>

<panel  header="**19 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/pull/59#discussion_r833342019" expanded>

Yup, will fix it in the next commit
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-1/tp/issues/16#issuecomment-1094306584" expanded>

Project requirements have changed, making this issue no longer relevant
</panel>

</panel>


<panel type="info" header="### 52. HANS.. WEI `@HansHengGit` (4 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/21#discussion_r823293618" expanded>

I suggest to add the print statement as per listExpenditure() to keep it standardised
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/21#discussion_r823294106" expanded>

Jia Rong and I are using double type for each value - May one to standardise on this as well. But we can sync later on
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/21#discussion_r823294107" expanded>

Jia Rong and I are using double type for each value - May one to standardise on this as well. But we can sync later on
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-2/tp/pull/21#discussion_r823293619" expanded>

I suggest to add the print statement as per listExpenditure() to keep it standardised
</panel>

</panel>


<panel type="info" header="### 53. ANVI..ARAM `@Anvitha-r` (3 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/50#discussion_r827904468" expanded>

the curly brackets could be aligned and followed for the if-else  statement
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/89#discussion_r833972497" expanded>

can delete this commented code?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/113#discussion_r835914015" expanded>

maybe can customize the exception to return specific error eg. Doctor with given name doesnt exist
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827656393" expanded>

yup oki tks 
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827656621" expanded>

yup i was wondering if we should change in this version or the next one
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/46#discussion_r827710096" expanded>

made changes to the placeholder pls help check thanks
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/45#issuecomment-1068209299" expanded>

looks good can be merged and closed!
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/pull/89#issuecomment-1077292910" expanded>

looks good i think the code seems neater and more organised
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/159#issuecomment-1090503589" expanded>

view medicine needs to specify the parameters by which they are being viewed; eg in this case 
view medicine /info name, paracetamol 
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/155#issuecomment-1090508139" expanded>

we are conflicted between using a real Nric checker as dummy data cannot be added for the purpose of testing of the app and hence decided to implement this approach instead. However we may consider this for the final version, thank you for the suggestion
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/160#issuecomment-1090574712" expanded>

implemented the changes
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/169#issuecomment-1090575176" expanded>

implemented
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/166#issuecomment-1090600034" expanded>

implemented
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/165#issuecomment-1090602811" expanded>

implemented
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/162#issuecomment-1090686216" expanded>

implemented
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/157#issuecomment-1090689434" expanded>

implemented
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-3/tp/issues/156#issuecomment-1091071299" expanded>

implemented 
</panel>

</panel>


<panel type="info" header="### 54. YAN ..ANAI `@TianaiYan` (3 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/97#discussion_r830448576" expanded>

Probably a //Fallthrough comment should be added.

From the [Java coding standard](https://se-education.org/guides/conventions/java/basic.html#layout) website:

> The explicit `//Fallthrough` comment should be included whenever there is a case statement without a break statement.


</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/125#discussion_r833475880" expanded>

Probably can use `index = 1` since `index + 1` is repeated for many times.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/253#discussion_r843431818" expanded>

Probably you can rename the parameter for better understanding? For example, oldWorkout.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/46#discussion_r825297239" expanded>

Thank you for your suggestion.
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/71#discussion_r827013512" expanded>

Sure. This sounds better.
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/74#discussion_r827975106" expanded>

Didn't notice that. Thank you for pointing it out.
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/74#discussion_r827976914" expanded>

Thank you for your suggestions.
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/113#discussion_r832866018" expanded>

Yes, it should be getPlansHashMapList(). I didn't notice that. Thank you for pointing it out.
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/163#discussion_r837602019" expanded>

```
if (isWorkoutFound) {
    System.out.println(workoutToCheck + " is found in:\n");
}
```

I added this kind of statement but in a different method. Do you think it's better to print it in the same method?
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/172#discussion_r840801646" expanded>

` deletePlanContainsDeletedWorkout()` method will find any plan that has the deleted workout. If such a plan was, the plan will be deleted and a message will be shown to tell the user that the plan has been deleted. If we call the `printDeleteWorkoutMessage()` in workout command, the workout deleted message will be shown after the plan deleted message.
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/301#discussion_r846561304" expanded>

Ok, I will change it later. Since the color is the same so I didn't remove it.
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/301#discussion_r846623254" expanded>

Thank you for your suggestion. I will rephrase these points.
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/48#issuecomment-1066093851" expanded>

Good use of loggings!
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-2/tp/pull/55#issuecomment-1066463317" expanded>

Looks great!
</panel>

</panel>


<panel type="info" header="### 55. ZHOU..NGXU `@Demonshaha` (2 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/91#discussion_r843169903" expanded>

should pass the checkstyles
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/91#discussion_r843170057" expanded>

should resolvethe merge conflict
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/9#issuecomment-1062852926" expanded>

LGTM
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/11#issuecomment-1066092601" expanded>

LGTM
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/13#issuecomment-1069046465" expanded>

LGTM

</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/17#issuecomment-1069107075" expanded>

LGTM
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/18#issuecomment-1070169601" expanded>

LGTM

</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/issues/7#issuecomment-1082690142" expanded>

Storage should store information into 3 parts
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/31#issuecomment-1082701702" expanded>

LGTM
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/32#issuecomment-1082727517" expanded>

Still need to modify the expected.txt
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/35#issuecomment-1083075036" expanded>

LGTM
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/85#issuecomment-1087629112" expanded>

LGTM
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/90#issuecomment-1088677816" expanded>

#90 
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/94#issuecomment-1089983833" expanded>

avoid useless changing to codes
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/142#issuecomment-1095112928" expanded>

LGTM
</panel>

</panel>


<panel type="info" header="### 56. ANG ..MING `@angyongming` (2 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/162#discussion_r838042412" expanded>

good choice making the input to lower case! makes the code more flexible
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/222#discussion_r844728597" expanded>

Lines 11 and 16 seem to be duplicated. Perhaps can remove one of them?
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/108#discussion_r834089658" expanded>

done!
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/108#discussion_r834094876" expanded>

Agreed but listCommand needs public access to it. Good observation though!
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/108#discussion_r835697679" expanded>

will do!
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/29#issuecomment-1062558533" expanded>

Fixes #10 
Fixes #11 
Fixes #22 
Fixes #26 
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/50#issuecomment-1067507097" expanded>

Everything looks good! Will merge now
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/54#issuecomment-1067561861" expanded>

Fixes #52 
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/55#issuecomment-1068139261" expanded>

Fixes #53 
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/57#issuecomment-1068681031" expanded>

Fixes #56 
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/59#issuecomment-1068708290" expanded>

Looks good. Merging now
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/62#issuecomment-1068725033" expanded>

Very nice!
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/66#issuecomment-1068807341" expanded>

Fixes #67 
Fixes #68 
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/72#issuecomment-1068807947" expanded>

Nice! Merging now.
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/102#issuecomment-1075919309" expanded>

Very nicely done!
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/106#issuecomment-1076014834" expanded>

Great job drawing the diagram!
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/110#issuecomment-1077526649" expanded>

Nice!
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/132#issuecomment-1079847109" expanded>

Fixes #133 
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/134#issuecomment-1079881304" expanded>

Fixes #120 
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/134#issuecomment-1079892458" expanded>

Fixes #135 
Fixes #136 
</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/145#issuecomment-1081277635" expanded>

Good use of documentation!
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/151#issuecomment-1082048270" expanded>

good job! everything looks great
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/167#issuecomment-1082803145" expanded>

nicely done!
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/175#issuecomment-1083267923" expanded>

good catch!
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/176#issuecomment-1083337208" expanded>

Nice!
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/217#issuecomment-1087267483" expanded>

Looks good
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/219#issuecomment-1089937000" expanded>

good job!
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/197#issuecomment-1090093330" expanded>

good catch!
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/199#issuecomment-1090093734" expanded>

Thanks for spotting my mistake! All rectified now :)
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/200#issuecomment-1090093889" expanded>

Thanks for spotting my mistake! All rectified now :)
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/204#issuecomment-1090093974" expanded>

Thanks for spotting my mistake! All rectified now :)
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/212#issuecomment-1090094292" expanded>

Thanks samantha! I've made the necessary changes alr :)
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/222#issuecomment-1091117773" expanded>

Everything looks good!
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/232#issuecomment-1091790921" expanded>

Looks good!
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/241#issuecomment-1093644110" expanded>

Nicely done!
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/242#issuecomment-1093668872" expanded>

Looks good!
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/240#issuecomment-1093726782" expanded>

Fixes #127 
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/251#issuecomment-1093727214" expanded>

Fixes #187 
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/259#issuecomment-1093754418" expanded>

Looks great!
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/269#issuecomment-1094697461" expanded>

Good job!
</panel>

<panel  header="**41 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/281#issuecomment-1094823133" expanded>

Nice!
</panel>

</panel>


<panel type="info" header="### 57. WAN ..AXIN `@YaxinJoy` (2 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/40#discussion_r827936800" expanded>

I am not sure if the string variable can use `!=` in the `assert` statement. Should it be `title.equals("")` in this statement?
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/76#discussion_r839462530" expanded>

It should not be `(todoInfo.length-1)/2`. If there are three elements saved in each todo, it should be `(todoInfo.length)/3`.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/pull/33#discussion_r826881751" expanded>

Noted. Thanks for your suggestion!
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-1/tp/issues/6#issuecomment-1065842074" expanded>

Some parts in the handleUserInput() (_tp/src/main/java/cpp/projects/commandhandler.handleUserInput(), line 29_) may exist errors. 

```
public void handleUserInput(ProjectList projectList, String userInput) {
        commands = userInput.split(" ");

        switch (commands[0].toLowerCase()) {
        case "addproject": //add a project into list
            projectList.addProject(commands[1]);
            System.out.println("____________________________________________________________");
            System.out.println(commands[1] + " Added.");
            System.out.println("____________________________________________________________");
            break;
        case "deleteproject": //delete a project based on its name
            projectList.deleteProject(commands[1]);
            System.out.println("____________________________________________________________");
            System.out.println(commands[1] + " Deleted.");
            System.out.println("____________________________________________________________");
            break;
        case "viewproject": //view all project(s) by name
            projectList.printProject();
            break;
        default:
            System.out.println("____________________________________________________________");
            System.out.println("Unknown command.");
            System.out.println("____________________________________________________________");
            break;
        }

    } 
```

If the length of a project name is longer than 2, for example, `addproject CS2113 tP`. The program will only save `CS2113` since the parameter passed to addProject() is `commands[1]`. Similarly, it may not delete a project properly if the name is longer than 2 characters.

Besides, I have fixed the issues for deleting a project (cannot use `projectList.remove(title)` directly). The parameter passed to ArrayList.remove() is the index of the item you want to delete, not its name.

Others look good!
</panel>

</panel>


<panel type="info" header="### 58. REN ..ANLE `@lelerer` (2 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/126#discussion_r821490473" expanded>

Consider using ZERO_COST_PAID to replace the magic number 0 here, and the same for other magic numbers 1 and 100.
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T10-1/tp/pull/293#discussion_r831024268" expanded>

Perhaps consider creating a new message instead of using Session's
</panel>

</panel>


<panel type="info" header="### 59. SIEW.. ZHI `@siewyangzhi` (1 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/383#discussion_r846892557" expanded>

After changing the .replace to .replace first,  do remember to implement the check conditions to catch the duplicate commands in a separate issue. 
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/160#issuecomment-1080674523" expanded>

Fixes #119
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/issues/314#issuecomment-1095233635" expanded>

Problem Solve
</panel>

</panel>


<panel type="info" header="### 60. IBRA..ARUL `@ibrahimisramos` (1 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/265#discussion_r847002381" expanded>

Thanks for your beatiful picture
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/3#issuecomment-1057641387" expanded>

hope this is approved
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/30#issuecomment-1063034783" expanded>

More testing needs to be done first
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/45#issuecomment-1066471076" expanded>

Fixes #9 
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/9#issuecomment-1066471321" expanded>

Fixes #9 using commit #45
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/55#issuecomment-1068138442" expanded>

Looks good, merging now!
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/74#issuecomment-1068872961" expanded>

Ok nice almost thought you missed out the coding standard violation. Thanks for helping to solve the clear method error. For some reason I couldnt merge my version of the changes
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/60#issuecomment-1069138857" expanded>

Done already!
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/82#issuecomment-1069147647" expanded>

Looks good!
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/84#issuecomment-1070059947" expanded>

Thanks for helping refactor, looks good
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/91#issuecomment-1071989760" expanded>

Looks good, nice use of asserts
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/104#issuecomment-1075970007" expanded>

Looks good!
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/121#issuecomment-1079837075" expanded>

Looks good. Great job man!
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/150#issuecomment-1082024484" expanded>

Looks good!
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/210#issuecomment-1087178908" expanded>

Add into UG that should add normal name and assume is english name
Implement check on name to be without special character
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/209#issuecomment-1087180279" expanded>

Its a good implementation to safeguard against typos!
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/208#issuecomment-1087181021" expanded>

Add more specific in the user guide that the n/ is the parameter and should not be included in the value
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/207#issuecomment-1087182138" expanded>

Add fullstop to all error messages
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/206#issuecomment-1087183138" expanded>

Solved and changed UG to be more clear. Thanks!
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/205#issuecomment-1087184190" expanded>

This is already implemented under clear [USER] but we can make it clearer. THanks
</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/202#issuecomment-1087187231" expanded>

Hi, the idea of this application is so that ALL users can make it for the meeting. But we will make it more explicit in the UG
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/198#issuecomment-1087189879" expanded>

Thanks for this. Will implement this
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/193#issuecomment-1087191554" expanded>

Thanks for pointing this out!
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/192#issuecomment-1087192789" expanded>

Thanks for this!
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/190#issuecomment-1087198171" expanded>

In this case, perhaps create 2 meetings,1 for 2300-2359 and another from 0000 - XXXX
But we will indicate this in our user guide as perhaps something we can consider doing in the future
Add this for both add_lesson and add_meeting @yanjie1017!
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/189#issuecomment-1087199479" expanded>

Thanks for this!
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/188#issuecomment-1087200361" expanded>

Marked duplicate, have changed it but thanks!
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/187#issuecomment-1087201365" expanded>

We are removing the welcome message aspect so it will be consistent!
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/186#issuecomment-1087202140" expanded>

Edited. thanks for spotting this!
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/185#issuecomment-1087202536" expanded>

Duplicate, edited this
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/201#issuecomment-1088210139" expanded>

We should make it clear how the save works
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/221#issuecomment-1090400879" expanded>

Looks good! 
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/226#issuecomment-1091108105" expanded>

Looks good
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/237#issuecomment-1093398877" expanded>

Thanks for handling the NoSuchElement exception. Other than increasing your ppp looks good!
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/238#issuecomment-1093408203" expanded>

Great job!
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/240#issuecomment-1093597638" expanded>

Looks good
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/249#issuecomment-1093689651" expanded>

Looks good
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/263#issuecomment-1094614564" expanded>

Looks good!
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/271#issuecomment-1094756718" expanded>

Looks good!
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/41#issuecomment-1094768082" expanded>

Done!
</panel>

<panel  header="**41 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/issues/211#issuecomment-1094794992" expanded>

Solved
</panel>

<panel  header="**42 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/282#issuecomment-1094839700" expanded>

Looks good!
</panel>

</panel>


<panel type="info" header="### 61. JASP..-EAN `@quitejasper` (1 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/33#discussion_r828793953" expanded>

Delete this line
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/185#discussion_r846895442" expanded>

Think we need the return statement so that we cut the method short and prevent the execution from printing the redundant "Here is a list of future borrowings" statement.
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/198#discussion_r847132063" expanded>

Refactored in the following commit.
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/35#issuecomment-1070543386" expanded>

Assertions should be used to indicate where programming development might have gone wrong, rather than where user environment went wrong.
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/181#issuecomment-1094199670" expanded>

This also resolves #111

We no longer need to update the status of the borrow records as they are generated in the loading phase at the start of the programme.
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/188#issuecomment-1094278729" expanded>

Update ListCurrentBorrowingsCommand.java

Modified execute method in accordance to `ListFutureBorrowingsCommand`.

Context:
`Item` already has an inbuilt function to retrieve a list of strings
that represent the BorrowRecords.

Let's:
* Leverage on this function in retrieving our borrowrecords (with the
name of the item)
* Use flatmap to collate all borrowrecords so as to determine whether
there are any borrowings at all
* Modify remaining code to utilise the list of records created, rather
than creating another list for the sake of printing
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/185#issuecomment-1094279786" expanded>

Resolves #151

We are now able to see if there are any borrowings at all.
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/195#issuecomment-1094460613" expanded>

**First few commits are in PR #192 , please approve that first before reviewing this.**
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/pull/196#issuecomment-1094479249" expanded>

**First few commits are in PR https://github.com/AY2122S2-CS2113-F10-2/tp/pull/192 , please approve that first before reviewing this.**
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/182#issuecomment-1094481612" expanded>

Do we need to show lost items if they are deleted through the lost command?

We can add in the UG that we assume lost items are only lost when not borrowed.
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/144#issuecomment-1094704446" expanded>

Already resolved.
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/56#issuecomment-1095089590" expanded>

Low Priority
</panel>

</panel>


<panel type="info" header="### 62. HOE ..EONG `@hjunleon` (1 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on others PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/35#discussion_r836994619" expanded>

Suggest change to "parseViewCmd(userInput)". Also due to commonality in certain code, would prefer if these are classes that inherit from a base class like "CommandsParseer.java"

</panel>

</panel>


<panel type="info" header="### 63. HAFI..TIAZ `@aiman-imtiaz` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/70#issuecomment-1069195173" expanded>

fixes #10, fixes #67, fixes #68, fixes #69
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/156#issuecomment-1081550131" expanded>

fixes #20 
</panel>

</panel>


<panel type="info" header="### 64. HO C..YING `@chihyingho` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-2/tp/issues/127#issuecomment-1095152462" expanded>

Completed
</panel>

</panel>


<panel type="info" header="### 65. LI H.. HAO `@lihao-InfoSec` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/101#issuecomment-1075257802" expanded>

Nice! 
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-3/tp/pull/114#issuecomment-1077702785" expanded>

Good Job
</panel>

</panel>


<panel type="info" header="### 66. ONG ..ICIA `@FaliciaOng` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/issues/397#issuecomment-1094591482" expanded>

User stories for help command not needed.
</panel>

</panel>


<panel type="info" header="### 67. SETH.. KAI `@sethlxk` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/104#issuecomment-1091868109" expanded>

Please fix the Gradle coding checks
</panel>

</panel>


<panel type="info" header="### 68. WANG..TENG `@ElaineQT` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/92#issuecomment-1089935670" expanded>

We designed the booking records to be all history records, including those bookings whose customers do not exist anymore. Therefore, it is reasonable that a customer who has booked a flight can be removed while the booking records are maintained.
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/84#issuecomment-1089976445" expanded>

This functionality is not supported now but will be considered in future versions.
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/83#issuecomment-1089977193" expanded>

We will consider this in future versions.
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/80#issuecomment-1089979269" expanded>

Ideally the users should not be allowed to directly touch the database. Therefore the input validation on data loaded from file is not considered for now.
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/66#issuecomment-1089983466" expanded>

More features are added in the final version to link menu to cutomers. 
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/63#issuecomment-1089992566" expanded>

Flight time is an optional field. Redundant words are ignored.
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/62#issuecomment-1089995374" expanded>

This is allowed to happen in our design because we want to keep the booking history for tracking purposes. 
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/61#issuecomment-1089999622" expanded>

This is allowed to happen by design.
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/52#issuecomment-1090002823" expanded>

ICs are considered as case-sensitive in our system. 
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/47#issuecomment-1090007634" expanded>

Redundant words in the command are ignored.
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/46#issuecomment-1090008059" expanded>

The time can be in any format.
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/43#issuecomment-1090010370" expanded>

This functionality is too detailed and not considered for now.
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/40#issuecomment-1090012807" expanded>

This format does not follow the user guide.
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/54#issuecomment-1090162056" expanded>

Fixed #101 
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/51#issuecomment-1090162286" expanded>

Fixed #101 
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/50#issuecomment-1090162463" expanded>

Fiexed #101 
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/41#issuecomment-1090162776" expanded>

Fixed #101 
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/49#issuecomment-1090163057" expanded>

Fixed #101
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/44#issuecomment-1090163314" expanded>

Fixed #101 
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/42#issuecomment-1090163587" expanded>

Fixed #101 
</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/48#issuecomment-1090163869" expanded>

Fixed #101
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/110#issuecomment-1093806520" expanded>

Added sequence diagrams for add route and list booking command #120 
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/95#issuecomment-1094238006" expanded>

Added more UML diagrams. Fixed text format. #101 
</panel>

</panel>


<panel type="info" header="### 69. ZHAO..QING `@z0723-julie` (0 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831166635" expanded>

OK
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831166815" expanded>

OK
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831167404" expanded>

OK, thank you.
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831716638" expanded>

OK
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831716673" expanded>

ok
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r831716728" expanded>

ok
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r833324949" expanded>

ok i will change
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/54#discussion_r835710430" expanded>

OK
</panel>

</panel>


<panel type="info" header="### 70. WANG..IYAN `@wang1351` (0 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824344304" expanded>

yes
</panel>

<panel  header="**2 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#discussion_r824344464" expanded>

I see
</panel>

<panel  header="**3 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827981001" expanded>

at first I thought this one was the error for not passing the check
</panel>

<panel  header="**4 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827981672" expanded>

noted with thanks
</panel>

<panel  header="**5 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/51#discussion_r827992711" expanded>

it seems that the constructor is useful
</panel>

<panel  header="**6 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833314193" expanded>

1. OK 
2. Yes the exception is right below this assert. This assert is just try to pass the label in dashboard
</panel>

<panel  header="**7 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833314344" expanded>

Thanks
</panel>

<panel  header="**8 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833314436" expanded>

Thanks
</panel>

<panel  header="**9 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#discussion_r833331212" expanded>

prefer the second 
</panel>

<panel  header="**10 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/75#discussion_r833858175" expanded>

I prefer merging contents first in case of further unexpected conflicts
</panel>

<panel  header="**11 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#discussion_r834568434" expanded>

ok
</panel>

<panel  header="**12 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/94#discussion_r835379944" expanded>

ok
</panel>

<panel  header="**13 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/95#discussion_r835852146" expanded>

ok
</panel>

<panel  header="**14 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/142#discussion_r841219598" expanded>

yes but forgot to change name back
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/23#issuecomment-1066013171" expanded>

resubmit a new one
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/64#issuecomment-1076478467" expanded>

try to avoid the conflict
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#issuecomment-1077867031" expanded>

why this one is not being checked?
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/89#issuecomment-1078544157" expanded>

> sorry i on phone. why pass in the dish index and the dish manager, when u can get the dish object directly ah.

to make the processing part in Manager? If you prefer it being in controller ofc can
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/63#issuecomment-1079675207" expanded>

> is this done?

No, this one seems not necessary
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/63#issuecomment-1079676056" expanded>

> is this done?

i can do tmr
</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/63#issuecomment-1079707531" expanded>

> 

just copied from dishManager, dk whether it works properly, after checking I close this one
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/101#issuecomment-1083295320" expanded>

ok
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/103#issuecomment-1084008534" expanded>

> re-upload v2.0 after this?

ddl passed yesterday
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/116#issuecomment-1086764019" expanded>

fixed in #103 
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/121#issuecomment-1086764241" expanded>

fixed somewhere, works properly on my side today
</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/123#issuecomment-1086764382" expanded>

prefer the one we already have :D
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/124#issuecomment-1086764565" expanded>

I think they are reviewing a previous version
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/125#issuecomment-1086764676" expanded>

ok just I'll call the dishManager function
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/127#issuecomment-1086765041" expanded>

then we use printf to show only 2 digits
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/129#issuecomment-1086765303" expanded>

in real case customers need to add multiple dishes one by one
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/146#issuecomment-1089742053" expanded>

Thank you! I fixed everything except the try catch blocks part. They are in different methods and I did not come up with a good solution to combine.
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/pull/154#issuecomment-1089743537" expanded>

#128 is automatically fixed by #150 
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-4/tp/issues/141#issuecomment-1089757654" expanded>

ok
</panel>

</panel>


<panel type="info" header="### 71. DEMI.. EGE `@edemirkirkan` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/78#issuecomment-1091802777" expanded>

Solved
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/68#issuecomment-1091807870" expanded>

Solved
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/65#issuecomment-1091817536" expanded>

Solved
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/60#issuecomment-1091823066" expanded>

Solved
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/57#issuecomment-1091842112" expanded>

Solved
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/54#issuecomment-1091843323" expanded>

Solved
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/53#issuecomment-1091854938" expanded>

Solved
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/46#issuecomment-1091857551" expanded>

Solved
</panel>

</panel>


<panel type="info" header="### 72. BREN.. JIE `@bbawj` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/53#issuecomment-1086579872" expanded>

This is info command I believe. Need to update UG
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/40#issuecomment-1086612816" expanded>

does the documentation format mean optional?
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/61#issuecomment-1092690139" expanded>

i tink he saying if we use commas to split its common for there to be commas in the address all this
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/45#issuecomment-1092690824" expanded>

@mafpovbul any idea wats this about?
</panel>

</panel>


<panel type="info" header="### 73. KHOO..SHUA `@suenalaba` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/26#issuecomment-1079393222" expanded>

Initial checkstyle checks not passed. Need to update to follow convention.
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/26#issuecomment-1079395929" expanded>

Checkstyles still failed for some files.
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/26#issuecomment-1079402179" expanded>

IO Tests still failing. Remove debugging print statements.
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/26#issuecomment-1079408149" expanded>

Add the new display get user input command.
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/26#issuecomment-1079416740" expanded>

All checks passed. Ok to merge.
</panel>

<panel  header="**6 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/21#issuecomment-1079441793" expanded>

Completed with checkstyle convention fulfilled.
</panel>

<panel  header="**7 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/21#issuecomment-1079441882" expanded>

Completed with checkstyle convention fulfilled.
</panel>

<panel  header="**8 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/21#issuecomment-1079441947" expanded>

Completed with checkstyle convention fulfilled.
</panel>

<panel  header="**9 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/25#issuecomment-1079442025" expanded>

Completed with checkstyle convention fulfilled.
</panel>

<panel  header="**10 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/24#issuecomment-1079442460" expanded>

Completed with checkstyle convention fulfilled.
</panel>

<panel  header="**11 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/23#issuecomment-1079443128" expanded>

Completed with checkstyle convention fulfilled.
</panel>

<panel  header="**12 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/22#issuecomment-1079443321" expanded>

Completed with checkstyle convention fulfilled.
</panel>

<panel  header="**13 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/27#issuecomment-1079443770" expanded>

User guide draft checked.
</panel>

<panel  header="**14 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/28#issuecomment-1079444098" expanded>

Initial user guide draft for menu item functionalities completed
</panel>

<panel  header="**15 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/99#issuecomment-1089263744" expanded>

Fix your checkstyle before merging. 
</panel>

<panel  header="**16 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/99#issuecomment-1089283731" expanded>

Checkstyles fixed
</panel>

<panel  header="**17 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/99#issuecomment-1089284452" expanded>

Try to remove magic string literals in switch case statements.
</panel>

<panel  header="**18 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/99#issuecomment-1089287288" expanded>

Ready to merge, magic string literals fixed.
</panel>

<panel  header="**19 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/97#issuecomment-1089290048" expanded>

Fixed magic string literals
</panel>

<panel  header="**20 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/85#issuecomment-1089291314" expanded>

Fixed debug statements
</panel>

<panel  header="**21 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/73#issuecomment-1089292465" expanded>

Added storage classes for Menu Item functionalities
</panel>

<panel  header="**22 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/69#issuecomment-1089293143" expanded>

Removed debug statements
</panel>

<panel  header="**23 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/53#issuecomment-1089294672" expanded>

Fixed by removing debug statements.
</panel>

<panel  header="**24 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/100#issuecomment-1090050714" expanded>


Your code in Line 54 of MealReservationManager should not be longer than 120 for code quality!
</panel>

<panel  header="**25 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/100#issuecomment-1090051379" expanded>

In MealReservationFileManager line 61, change your variable name to follow naming convention

</panel>

<panel  header="**26 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/100#issuecomment-1090058399" expanded>

In MealReservationManager line 54, I think the operator should be wrapped on the next line, please fix before merging
</panel>

<panel  header="**27 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/82#issuecomment-1090062075" expanded>

Fixed and remove debugging statement.
</panel>

<panel  header="**28 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/78#issuecomment-1090062841" expanded>

Fixed and included save feature for menu items.
</panel>

<panel  header="**29 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/71#issuecomment-1090063424" expanded>

Added a checker to disallow duplicates.
</panel>

<panel  header="**30 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/74#issuecomment-1090064222" expanded>

This issue is fixed, will update user guide informing users that Name is case sensitive, that is Tiramisu Cake vs tiramisu cake refers to DIFFERENT item.
</panel>

<panel  header="**31 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/67#issuecomment-1090065578" expanded>

Fixed this issue, now if there are no _ separating, the item will not be added at all.
</panel>

<panel  header="**32 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/102#issuecomment-1090179857" expanded>

Resolve merge conflict in CommandResult.java before merging
</panel>

<panel  header="**33 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/10#issuecomment-1090186889" expanded>

We won't be implementing this feature.
</panel>

<panel  header="**34 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/35#issuecomment-1090187516" expanded>

We won't be implementing this feature - no time.
</panel>

<panel  header="**35 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/103#issuecomment-1090200588" expanded>

Passed checks, ready to merge
</panel>

<panel  header="**36 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/7#issuecomment-1090201191" expanded>

Functionalities added
</panel>

<panel  header="**37 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/104#issuecomment-1090282346" expanded>

Fix AddMenuItemCommand.java Line 22 before merging. First line of javadoc statement must end with a full stop
</panel>

<panel  header="**38 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/88#issuecomment-1090353238" expanded>

I've fixed the broken links for my part, do check yours
</panel>

<panel  header="**39 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/76#issuecomment-1090354155" expanded>

Fixed by including clear UG documentation
</panel>

<panel  header="**40 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/75#issuecomment-1090354880" expanded>

Fixed for menu item functionalities, do fix the rest for your parts accordingly.=
</panel>

<panel  header="**41 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/72#issuecomment-1090356006" expanded>

Fixed UG guide to make it more clear for menu item functionality
</panel>

<panel  header="**42 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/64#issuecomment-1090356567" expanded>

Fixed User Guide to not include this feature due to lack of time
</panel>

<panel  header="**43 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/57#issuecomment-1090356858" expanded>

To fix this issue before v2.1 is released
</panel>

<panel  header="**44 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/60#issuecomment-1090357661" expanded>

Fixed hyper links for menu item part, please fix for your own parts
</panel>

<panel  header="**45 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/39#issuecomment-1090358580" expanded>

Fixed user guide to make commands more clear to follow
</panel>

<panel  header="**46 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/11#issuecomment-1090360054" expanded>

We will not be doing this functionality due to lack of time
</panel>

<panel  header="**47 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/13#issuecomment-1090360434" expanded>

We will not be doing this functionality due to lack of time
</panel>

<panel  header="**48 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/95#issuecomment-1090456309" expanded>

More UML Diagrams added
Fixed User story formatting
</panel>

<panel  header="**49 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/29#issuecomment-1090459322" expanded>

Updated sequence diagrams 
</panel>

<panel  header="**50 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/130#issuecomment-1094341027" expanded>

Java CI checks passed, code quality check complete.
</panel>

<panel  header="**51 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/110#issuecomment-1094341103" expanded>

Xinyi mentioned no time to complete, good enough for now
</panel>

<panel  header="**52 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/95#issuecomment-1094341159" expanded>

Verified that all is completed
</panel>

</panel>


<panel type="info" header="### 74. TIMO..UEN `@timchang27` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/30#issuecomment-1091886684" expanded>

Solved
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/48#issuecomment-1091959760" expanded>

Thanks for the feedback! We have added in divider lines to make the interface more presentable. For spaces in text, we decided not to added them in for now as we thought it might not be sustainable for prolonged use of the app. It might be confusing for users if they include some spaces and omit some.
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/64#issuecomment-1091960029" expanded>

Thanks for the suggestion! We considered having this input format but feel that it might not be sustainable to keep typing spaces especially over prolonged usage of our app. It might also become inconsistent if users end up omitting spaces here and there.
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/44#issuecomment-1091963622" expanded>

Updated. Thank you for the feedback :)
</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F10-3/tp/issues/39#issuecomment-1091964003" expanded>

Done. Thank you for the feedback :) 
</panel>

</panel>


<panel type="info" header="### 75. ZENG..UNYI `@XunyiiZ` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/32#issuecomment-1066692354" expanded>

fixes #6
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-1/tp/pull/239#issuecomment-1082795274" expanded>

lgtm hah
</panel>

</panel>


<panel type="info" header="### 76. XIA ..ANYI `@DolphXty` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-T11-2/tp/pull/19#issuecomment-1072016793" expanded>

.
</panel>

</panel>


<panel type="info" header="### 77. WESL..ANTO `@cristoforows` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/86#issuecomment-1091374158" expanded>

No hyperlink found in our repository
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/81#issuecomment-1091388815" expanded>

solved
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/74#issuecomment-1091752364" expanded>

noted with thanks
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/73#issuecomment-1091755991" expanded>

created notice on the quick start inside the user guide

</panel>

<panel  header="**5 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113-F12-1/tp/issues/49#issuecomment-1091757680" expanded>

mend
</panel>

</panel>


<panel type="info" header="### 78. JOHN..JONO `@johnsuharjono` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/55#issuecomment-1091130921" expanded>

Finished redirect the link to release page which automatically display the most recent release.
</panel>

<panel  header="**2 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/57#issuecomment-1091132609" expanded>

Edited the filename in the release page.
</panel>

<panel  header="**3 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/75#issuecomment-1091817068" expanded>

Fixed hyperlink and put segregation on the user guide
</panel>

<panel  header="**4 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/pull/120#issuecomment-1094280012" expanded>

lgtm!
</panel>

</panel>


<panel type="info" header="### 79. LI X..INYI `@LI-XINYI1` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122s2-CS2113-F12-3/tp/issues/12#issuecomment-1085290806" expanded>

staff added
</panel>

</panel>


<panel type="info" header="### 80. NGUY..TUAN `@tuan0369` (0 comments)"  collapsed>


<panel  header="**1 :octicon-git-pull-request::octicon-comment:** (commented on own PR)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/28#discussion_r831121833" expanded>

actually yeah let me change that
</panel>

</panel>


<panel type="info" header="### 81. LIM .. YIN `@Shyunyin` (0 comments)"  collapsed>


<panel  header="**1 :octicon-comment:** (other comment)" popup-url="https://github.com/AY2122S2-CS2113T-T09-4/tp/pull/35#issuecomment-1079736127" expanded>

Uh-oh im not sure about the 2nd failed check...
</panel>

</panel>
