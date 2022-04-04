---
sidebar_position: 2
---

# Create a locker
On DuoCash you have to create a locker first, then you are able to lock your assets in them. This guide will show you how to create a new locker.

## Open the "Create a new Locker" screen
To start the creation process go to [Newest Lockers](https://duo.cash/lockers/new) and click on the button that says "New Locker".
If your wallet is not yet connected, press the button "Connect your wallet". Your Metamask wallet should then pop up and ask if you want to connect to DuoCash. Click "Connect" in your metamask.
![Create a new locker modal](/img/screenshots/create-locker/open-modal.png)

Now you can click on the chain ("Ethereum" in this example image) to change what chain you will be creating the locker on. For this example we will use Polygon.
![Connected wallet](/img/screenshots/create-locker/connected.png)

If you see the "Switch to ..." button click it to have metamask switch to the correct chain.
![Switch chains](/img/screenshots/create-locker/chain-switch.png)

## Configuring the new locker
We have a few settings to choose, we will go over them here. 

### Unlock
If you want your locker to be locked until a certain date, check the "Set an unlock date". If you are locking LP tokens this is most likely what you are looking for.

:::tip Tip
You can choose to create the locker without a timelock and set the timelock afterwards, however this is not recommeded as this will have a higher total transaction cost.
:::

![Datepicker](/img/screenshots/create-locker/datepicker.png)

### Ownership
If you wish to gift the ownership to another wallet you can check "Give the ownership to someone else". Then paste the address of who should be the owner of the new locker. 
![Ownership of a new locker](/img/screenshots/create-locker/owner.png)

## Create
Now that we have configured the locker we can click "Create". If you are not able to click on this button please double-check you have switched to the correct chain.

Voila! There we have our new locker.
![Configured locker](/img/screenshots/create-locker/done.png)