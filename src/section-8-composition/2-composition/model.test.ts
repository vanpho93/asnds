import { Neuron, NeuronLayer } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Neuron and NeuronLayer work`, () => {
    const neuron1 = new Neuron()
    const neuron2 = new Neuron()
    const layer1 = new NeuronLayer(3)
    const layer2 = new NeuronLayer(4)

    neuron1.connectTo(neuron2)
    neuron1.connectTo(layer1)
    layer2.connectTo(neuron1)
    layer1.connectTo(layer2)

    equal(neuron1.toString(), 'A neuron with 4 inputs and 4 outputs')
    equal(neuron2.toString(), 'A neuron with 1 inputs and 0 outputs')
    equal(layer1.toString(), 'A layer with 3 neurons')
    equal(layer2.toString(), 'A layer with 4 neurons')
  })
})
